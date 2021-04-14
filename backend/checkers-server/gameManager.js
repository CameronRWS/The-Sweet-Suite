let nextGameId = 0;

const movePiece = require('./movePiece');

const games = [];

const getGameForPlayer = (player) => {
    return games.find((g) =>
      g.players.find((p) => p.socket === player)
    );
  };


exports.getGames = () =>
    games.map((g) => {
        const { players, ...game} = g;
        return {
            ...game,
            numberOfPlayers:players.length,
        };
    });

exports.createGame = ({ player, name }) => {
    const game = {
        name,
        turn: 'red',
        players: [
            {
                socket: player,
                color: 'red',
            },
        ],
        chat: [],
        id: nextGameId++,
        board: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 2, 0, 2],
            [2, 0, 2, 0, 2, 0, 2, 0],
            [0, 2, 0, 2, 0, 2, 0, 2],
        ],
        // board: [
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 1, 0, 0, 0, 0, 0],
    //   [0, 2, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    // ],

    };
    games.push(game);
};
