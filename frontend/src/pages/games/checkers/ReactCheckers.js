import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import Game from "./Game";
import Lobby from "./Lobby";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const PAGE_GAME = "Game";
const PAGE_LOBBY = "Lobby";
const PAGE_CREATE_NEW_GAME = "CreateNewGame";

function App(props) {
  const [page, setPage] = useState("Lobby");
  const [games, setGames] = useState([]);
  const [color, setColor] = useState("");
  const [game, setGame] = useState({ board: [], chat: [] });
  const [gameId, setGameId] = useState(null);
  const [socket, setSocket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");
  const [username] = useState(props.user);

  const joinGame = (gameId) => {
    socket.emit("join-game", gameId);
    setPage(PAGE_GAME);
    setGameId(gameId);
  };

  const movePiece = ({ selectedPiece, destination }) => {
    socket.emit("move-piece", {
      selectedPiece,
      destination,
    });
  };

  useEffect(() => {
    const game = games.find((g) => g.id === gameId);
    if (!game) {
      setGame({
        board: [],
      });
    } else {
      setGame(game);
    }
  }, [games, gameId]);

  const leaveGame = () => {
    setGame(PAGE_LOBBY); //TODO
    socket.emit("leave-game");
  };

  const createGame = (name) => {
    socket.emit("create-game", name);
    setPage(PAGE_GAME);
  };

  const sendChat = (message) => {
    socket.emit("chat-message", message);
  };

  useEffect(() => {
    const newSocket = io("http://localhost:4000", {
      transports: ["websocket"],
    });
    newSocket.on("disconnect", () => {
      setGameId(null);
      setColor("");
      setPage(PAGE_LOBBY);

      alert("The server has crashed or restarted");
    });

    newSocket.on("games", (games) => {
      setGames(games);
    });

    newSocket.on("your-game-created", (gameId) => {
      setGameId(gameId);
    });
    newSocket.on("color", (color) => setColor(color));
    newSocket.on("end-game", () => {
      setGameId(null);
      setColor("");
      setPage(PAGE_LOBBY);
      setShowModal(true);
      setModalText("Your opponent has left the game");
      setModalTitle("Game Over");
    });
    newSocket.on("winner", (winner) => {
      alert(`${winner} has won the game!`);
    });
    setSocket(newSocket);
  }, []);

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {page === PAGE_LOBBY && (
        <Lobby
          createGame={createGame}
          displayname={username}
          joinGame={joinGame}
          games={games}
        ></Lobby>
      )}
      {page === PAGE_CREATE_NEW_GAME && <div>create new game</div>}
      {page === PAGE_GAME && (
        <Game
          color={color}
          game={game}
          leaveGame={leaveGame}
          movePiece={movePiece}
          sendChat={sendChat}
        />
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;