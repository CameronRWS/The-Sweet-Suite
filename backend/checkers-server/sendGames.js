
const { getGames } = require('./helper');

module.exports = (sender) => {
  sender.emit('games', getGames());
};
