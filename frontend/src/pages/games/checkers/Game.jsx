import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import classNames from "classnames";

import "../../GameSuite.css";
import "./Checkers.css";

const colorMap = {
  0: "empty",
  1: "red",
  2: "black",
  3: "red",
  4: "black",
};

export default function Game({ movePiece, game, color }) {
  const [selectedPiece, setSelectedPiece] = useState({});

  const selectPiece = (i, j) => {
    if (game.turn !== color) return;
    if (colorMap[game.board[i][j]] !== color) return;
    setSelectedPiece({ i, j });
  };

  const dropSelectedPiece = (i, j) => {
    if (game.turn !== color) return;
    if (game.board[i][j] !== 0) return;
    if ((i + j) % 2 === 1) return;
    movePiece({
      selectedPiece,
      destination: {
        i,
        j,
      },
    });
    setSelectedPiece({});
  };

  const isPieceSelected = (i, j) => {
    return selectedPiece.i === i && selectedPiece.j === j;
  };

  const isGameStarted = () => game.numberOfPlayers === 2;

  const getColor = (piece) => (piece === 1 ? "redPiece" : "blackPiece");


  const renderBoard = () => {
    return (
      <div className="Container">
        {game.board.map((row, i) => (
          <div key={i}>
            {row.map((piece, j) => (
              <div
                key={`${i} ${j}`}
                className={(i + j) % 2 === 0 ? "whiteSquare" : "blackSquare"}
                onClick={() => dropSelectedPiece(i, j)}
              >
                {piece !== 0 && (
                  <div
                    className={classNames(getColor(piece), {
                      selected: isPieceSelected(i, j),
                      red: piece === 1,
                      black: piece === 2,
                      blackQueen: piece === 4,
                      redQueen: piece === 3,
                      clickable: color === getColor(piece),
                    })}
                    onClick={() => selectPiece(i, j)}
                  ></div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const renderGame = () => {
    return (
      <>
        <div>Your piece color is {color}</div>
        {game.turn === color && <div>It is your Turn!</div>}
        {game.turn !== color && <div> waiting for opponent!</div>}
        {renderBoard()}
      </>
    );
  };

  const renderWaiting = () => {
    return (
      <div>
        <h2>{game.name}</h2>
        <div>
          <Spinner animation="border" role="status" />
        </div>
        <span>Waiting for an opponent....</span>
      </div>
    );
  };

  return (
    <div>
      {!isGameStarted() && renderWaiting()}
      {isGameStarted() && renderGame()}
    </div>
  );
}
