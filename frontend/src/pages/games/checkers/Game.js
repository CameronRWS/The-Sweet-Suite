import React from "react";
import Board from "./Board.js";
import { ReactCheckers } from './ReactCheckers'
import { returnPlayerName } from "./helpers/utils";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "../../GameSuite.css";
import "./Checkers.css";

const browserHistory = createBrowserHistory();

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.columns = this.setColumns();

    this.ReactCheckers = new ReactCheckers(this.columns);

    this.state = {
      players: 1,
      history: [
        {
          boardState: this.createBoard(),
          currentPlayer: true,
        },
      ],
      activePiece: null,
      moves: [],
      jumpKills: null,
      hasJumped: null,
      stepNumber: 0,
      winner: null,
    };
  }

  setColumns() {
    const columns = {};
    columns.a = 0;
    columns.b = 1;
    columns.c = 2;
    columns.d = 3;
    columns.e = 4;
    columns.f = 5;
    columns.g = 6;
    columns.h = 7;

    return columns;
  }

  createBoard() {
    let board = {};

    for (let key in this.columns) {
      if (this.columns.hasOwnProperty(key)) {
        for (let n = 1; n <= 8; ++n) {
          let row = key + n;
          board[row] = null;
        }
      }
    }

    board = this.initPlayers(board);
    console.log(board);
    return board;
  }

  initPlayers(board) {
    const red = [
      "a8",
      "c8",
      "e8",
      "g8",
      "b7",
      "d7",
      "f7",
      "h7",
      "a6",
      "c6",
      "e6",
      "g6",
    ];
    const black = [
      "b3",
      "d3",
      "f3",
      "h3",
      "a2",
      "c2",
      "e2",
      "g2",
      "b1",
      "d1",
      "f1",
      "h1",
    ];

    let self = this;

    red.forEach(function (i) {
      board[i] = self.createPiece(i, "red");
    });

    black.forEach(function (i) {
      board[i] = self.createPiece(i, "black");
    });

    return board;
  }

  createPiece(location, player) {
    let piece = {};

    piece.player = player;
    piece.location = location;
    piece.isKing = false;

    return piece;
  }

  getCurrentState() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    return history[history.length - 1];
  }


  handleClick(coordinates) {
    if (this.state.winner !== null) {
      return;
    }

    const currentState = this.getCurrentState();
    const boardState = currentState.boardState;
    const clickedSquare = boardState[coordinates];

    if (clickedSquare !== null) {

      if (
        clickedSquare.player !== returnPlayerName(currentState.currentPlayer)
      ) {
        return;
      }


      if (
        this.state.activePiece === coordinates &&
        this.state.hasJumped === null
      ) {
        this.setState({
          activePiece: null,
          moves: [],
          jumpKills: null,
        });
        return;
      }


      if (this.state.hasJumped !== null && boardState[coordinates] !== null) {
        return;
      }




      this.setState({
        activePiece: coordinates,
        moves: null,
        jumpKills: null,
      });

      return;
    }


    if (this.state.activePiece === null) {
      return;
    }


    if (this.state.moves.length > 0) {
      const postMoveState = this.ReactCheckers.movePiece(
        coordinates,
        this.state
      );

      if (postMoveState === null) {
        return;
      }

      this.updateStatePostMove(postMoveState);

      if (
        postMoveState.currentPlayer === false &&
        postMoveState.winner === null
      ) {
        this.computerTurn();
      }
    }

    console.log(this.state.history);
  }

  updateStatePostMove(postMoveState) {
    this.setState({
      history: this.state.history.concat([
        {
          boardState: postMoveState.boardState,
          currentPlayer: postMoveState.currentPlayer,
        },
      ]),
      activePiece: postMoveState.activePiece,
      moves: postMoveState.moves,
      jumpKills: postMoveState.jumpKills,
      hasJumped: postMoveState.hasJumped,
      stepNumber: this.state.history.length,
      winner: postMoveState.winner,
    });
  }

  setPlayers(players) {
    this.setState({
      players: players,
    });
  }

  render() {
    const columns = this.columns;
    const stateHistory = this.state.history;
    const activePiece = this.state.activePiece;
    const currentState = stateHistory[this.state.stepNumber];
    const boardState = currentState.boardState;
    const currentPlayer = currentState.currentPlayer;
    const moves = this.state.moves;



    return (
      <div className="Container">
        <Board
          boardState={boardState}
          currentPlayer={currentPlayer}
          activePiece={activePiece}
          moves={moves}
          columns={columns}
          onClick={(coordinates) => this.handleClick(coordinates)}
        />
      </div>
    );
  }
}
