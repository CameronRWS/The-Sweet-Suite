const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  transports: ["websocket"],
});

const {
  createGames,
  joinGame,
  leaveGame,
  movePieceHandler,
  onDisconnect,
} = require("./handlers");

const  sendGames  = require('./sendGames');

io.on("connection", (socket) => {
  sendGames(socket);

  socket.on("disconnect", onDisconnect({ io, socket }));
  socket.on("move-piece", movePieceHandler({ io, socket }));
  socket.on("leave-game", leaveGame({ socket, io }));
  socket.on("create-game", createGames({ io, socket }));
  socket.on("join-game", joinGame({ io, socket }));
});

http.listen(4000, () => {
  console.log("sockets are listening at port 4000");
});
