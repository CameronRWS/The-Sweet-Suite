import * as utils from './helpers/utils';

export class ReactCheckers {

    constructor(columns) {
        this.columns = columns;
    }


    movePiece(coordinates, state) {
        let currentState  = Object.assign({}, state.history[state.stepNumber]);
        let boardState = Object.assign({}, currentState.boardState);
        let movingPiece = Object.assign({}, boardState[state.activePiece]);

        let jumpArray = [];

        for (let key in state.jumpKills) {
            if (!state.jumpKills.hasOwnProperty(key)) {
                continue;
            }

            jumpArray.push(state.jumpKills[key]);
        }

        if (state.moves.indexOf(coordinates) < 0 && jumpArray.indexOf(coordinates) < 0) {
            return null;
        }

        if (this.shouldKing(movingPiece, coordinates)) {
            movingPiece.isKing = true;
        }


        boardState[state.activePiece] = null;
        boardState[coordinates] = movingPiece;

        const player = movingPiece.player;
        let hasJumped = null;
        let newMoves = [];
        let setCurrentPlayer = player === 'black';
        let setActivePiece = null;

        if (jumpArray.indexOf(coordinates) > -1) {
            let opponentPosition = utils.getKeyByValue(state.jumpKills, coordinates);
            boardState[opponentPosition] = null;

            newMoves = this.getMoves(boardState, coordinates, movingPiece.isKing, true);

            if (newMoves[0].length > 0) {
                hasJumped = true;
                setCurrentPlayer = currentState.currentPlayer;
                setActivePiece = coordinates;
            } else {
                hasJumped = null;
            }
        }

        if (hasJumped === true) {
            if (newMoves[0].length > 0) {
                setCurrentPlayer = currentState.currentPlayer;
                setActivePiece = coordinates;
            }
        }

        let stateOut = {};

        stateOut.boardState = boardState;
        stateOut.currentPlayer = setCurrentPlayer;
        stateOut.activePiece = setActivePiece;
        stateOut.moves = hasJumped === true ? newMoves[0] : [];
        stateOut.jumpKills = hasJumped === true ? newMoves[1] : null;
        stateOut.hasJumped = hasJumped === true ? player : null;
        stateOut.winner = this.evaluateWinner(boardState);

        return stateOut;
    }




}
