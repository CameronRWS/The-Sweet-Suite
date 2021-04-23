const {
  createGame,
  getGameById,
  addPlayerToGame,
  movePiece,
  isGameOver,
  endGame,
} = require("./helper");

const sendGames = require('./sendGames')

exports.createGames = ({ io, socket }) => (name) => {
  const game = createGame({ player: socket, name });
  sendGames(io);
  socket.emit("your-game-created", game.id);
  socket.emit("color", "red");
};

exports.joinGame = ({ io, socket }) => (gameId) => {
  const game = getGameById(gameId);
  if (game.numberOfPlayers < 2) {
    const color = addPlayerToGame({
      player: socket,
      gameId,
    });
    sendGames(io);
    socket.emit("color", color);
  }
};

exports.leaveGame = ({ io, socket }) => () => {
  endGame({ player: socket });
  sendGames(io);
};

exports.movePieceHandler = ({ io, socket }) => ({
  selectedPiece,
  destination,
}) => {
  movePiece({
    player: socket,
    selectedPiece,
    destination,
  });
  const winner = isGameOver({ player: socket });
  if (winner) {
    endGame({ player: socket, winner });
  }

  sendGames(io);
};

exports.onDisconnect = ({ io, socket }) => () => {
  endGame({ player: socket });
  sendGames(io);
};
