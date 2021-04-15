import React, { useEffect, useState } from "react";
import Board from "./Board.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';


import { Router } from "react-router-dom";
import classNames from 'classnames';
import createBrowserHistory from "history/createBrowserHistory";
import "../../GameSuite.css";
import "./Checkers.css";

const browserHistory = createBrowserHistory();


const colorMap = {
  0: 'empty',
  1: 'red',
  2: 'black',
  3: 'red',
  4: 'black',
};

export default function Game({
  leaveGame,
  movePiece,
  game,
  color,
  sendChat,
}) {
  const [selectedPiece, setSelectedPiece] = useState({});
  const [chatText, setChatText] = useState({});

  // useEffect(() => {
  //   return () => leaveGame();
  // }, []);

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
  }

  const isPieceSelected = (i, j) => {
    return selectedPiece.i === i && selectedPiece.j === j;
  };

  const isGameStarted = () => game.numberOfPlayers === 2;

  const getColor = (piece) =>
    piece === 1 ? 'red' : 'black';

  const renderBoard = () => {
    return (
      <div className="Container">
        {game.board.map((row, i) => (
          <div key={i} className="row">
            {row.map((piece, j) => (
              <div
                key={`${i} ${j}`}
                className={(i + j) % 2 === 0 ? "whiteSquare" : "blackSquare"}
                onClick={() => dropSelectedPiece(i, j)}
              >
                {piece !== 0 && (
                  <div
                    className={classNames('piece', {
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
  }

  const renderGame = () =>{
    return(
      <>
        <Col>
          <div>Your piece color is {color}</div>
          {game.turn === color && (
            <div>It is your Turn!</div>
          )}
          {game.turn !== color && (
            <div> waiting for opponent!</div>
          )}
          {renderBoard()}
        </Col>
      </>
    )
  };


  return (
    <Row>
      {isGameStarted() && renderGame()}
    </Row>
  )
};

// default class Game extends React.Component {
//   constructor(props) {
//     super(props);

//     this.columns = this.setColumns();

//     this.ReactCheckers = new ReactCheckers(this.columns);

//     this.state = {
//       players: 1,
//       history: [
//         {
//           boardState: this.createBoard(),
//           currentPlayer: true,
//         },
//       ],
//       activePiece: null,
//       moves: [],
//       jumpKills: null,
//       hasJumped: null,
//       stepNumber: 0,
//       winner: null,
//     };
//   }

//   setColumns() {
//     const columns = {};
//     columns.a = 0;
//     columns.b = 1;
//     columns.c = 2;
//     columns.d = 3;
//     columns.e = 4;
//     columns.f = 5;
//     columns.g = 6;
//     columns.h = 7;

//     return columns;
//   }

//   createBoard() {
//     let board = {};

//     for (let key in this.columns) {
//       if (this.columns.hasOwnProperty(key)) {
//         for (let n = 1; n <= 8; ++n) {
//           let row = key + n;
//           board[row] = null;
//         }
//       }
//     }

//     board = this.initPlayers(board);
//     console.log(board);
//     return board;
//   }

//   initPlayers(board) {
//     const red = [
//       "a8",
//       "c8",
//       "e8",
//       "g8",
//       "b7",
//       "d7",
//       "f7",
//       "h7",
//       "a6",
//       "c6",
//       "e6",
//       "g6",
//     ];
//     const black = [
//       "b3",
//       "d3",
//       "f3",
//       "h3",
//       "a2",
//       "c2",
//       "e2",
//       "g2",
//       "b1",
//       "d1",
//       "f1",
//       "h1",
//     ];

//     let self = this;

//     red.forEach(function (i) {
//       board[i] = self.createPiece(i, "red");
//     });

//     black.forEach(function (i) {
//       board[i] = self.createPiece(i, "black");
//     });

//     return board;
//   }

//   createPiece(location, player) {
//     let piece = {};

//     piece.player = player;
//     piece.location = location;
//     piece.isKing = false;

//     return piece;
//   }

//   getCurrentState() {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     return history[history.length - 1];
//   }


//   handleClick(coordinates) {
//     if (this.state.winner !== null) {
//       return;
//     }

//     const currentState = this.getCurrentState();
//     const boardState = currentState.boardState;
//     const clickedSquare = boardState[coordinates];

//     if (clickedSquare !== null) {

//       if (
//         clickedSquare.player !== returnPlayerName(currentState.currentPlayer)
//       ) {
//         return;
//       }


//       if (
//         this.state.activePiece === coordinates &&
//         this.state.hasJumped === null
//       ) {
//         this.setState({
//           activePiece: null,
//           moves: [],
//           jumpKills: null,
//         });
//         return;
//       }


//       if (this.state.hasJumped !== null && boardState[coordinates] !== null) {
//         return;
//       }




//       this.setState({
//         activePiece: coordinates,
//         moves: null,
//         jumpKills: null,
//       });

//       return;
//     }


//     if (this.state.activePiece === null) {
//       return;
//     }


//     if (this.state.moves.length > 0) {
//       const postMoveState = this.ReactCheckers.movePiece(
//         coordinates,
//         this.state
//       );

//       if (postMoveState === null) {
//         return;
//       }

//       this.updateStatePostMove(postMoveState);

//       if (
//         postMoveState.currentPlayer === false &&
//         postMoveState.winner === null
//       ) {
//         this.computerTurn();
//       }
//     }

//     console.log(this.state.history);
//   }

//   updateStatePostMove(postMoveState) {
//     this.setState({
//       history: this.state.history.concat([
//         {
//           boardState: postMoveState.boardState,
//           currentPlayer: postMoveState.currentPlayer,
//         },
//       ]),
//       activePiece: postMoveState.activePiece,
//       moves: postMoveState.moves,
//       jumpKills: postMoveState.jumpKills,
//       hasJumped: postMoveState.hasJumped,
//       stepNumber: this.state.history.length,
//       winner: postMoveState.winner,
//     });
//   }

//   setPlayers(players) {
//     this.setState({
//       players: players,
//     });
//   }

//   render() {
//     const columns = this.columns;
//     const stateHistory = this.state.history;
//     const activePiece = this.state.activePiece;
//     const currentState = stateHistory[this.state.stepNumber];
//     const boardState = currentState.boardState;
//     const currentPlayer = currentState.currentPlayer;
//     const moves = this.state.moves;



//     return (
//       <div className="Container">
//         <Board
//           boardState={boardState}
//           currentPlayer={currentPlayer}
//           activePiece={activePiece}
//           moves={moves}
//           columns={columns}
//           onClick={(coordinates) => this.handleClick(coordinates)}
//         />
//       </div>
//     );
//   }
// }
