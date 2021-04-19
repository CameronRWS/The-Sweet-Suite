const RED_PAWN = 1;
const BLACK_PAWN = 2;
const RED_QUEEN = 3;
const BLACK_QUEEN = 4;
const TOP_ROW = 0;
const BOTTOM_ROW = 7;

module.exports = ({ game, destination, selectedPiece }) => {
  if (selectedPiece.i === undefined || selectedPiece.j === undefined) return;
  const i = selectedPiece.i;
  const j = selectedPiece.j;
  const di = destination.i;
  const dj = destination.j;
  const distanceI = destination.i - selectedPiece.i;
  const distanceJ = destination.j - selectedPiece.j;
  const oneCellForwardI = i + Math.abs(distanceI) / distanceI;
  const oneCellForwardJ = j + Math.abs(distanceJ) / distanceJ;
  const destinationPiece = game.board[di][dj];
  const piece = game.board[i][j];

  if (destinationPiece !== 0) return;

  if (Math.abs(distanceI) !== Math.abs(distanceJ)) return;

  if (piece === RED_PAWN && di <= i) return;

  if (piece === BLACK_PAWN && di >= i) return;

  if (Math.abs(distanceI) > 2) return;

  if (Math.abs(distanceI) === 2) {
    const middlePiece = game.board[oneCellForwardI][oneCellForwardJ];
    if (middlePiece === 0) return;
    if (middlePiece !== piece) {
      game.board[oneCellForwardI][oneCellForwardJ] = 0;
    } else {
      return;
    }
  }

  game.board[di][dj] = game.board[i][j];
  game.board[i][j] = 0;

  if (piece === RED_PAWN && di === BOTTOM_ROW) {
    game.board[di][dj] = RED_QUEEN;
  } else if (piece === BLACK_PAWN && di === TOP_ROW) {
    game.board[di][dj] = BLACK_QUEEN;
  }

  game.turn = game.turn === "red" ? "black" : "red";
};
