const db = require('./index.js');

module.exports = {
  getAllPlayersData: () => (db.query('SELECT * FROM player_data;')),
};
