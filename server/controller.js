const { getAllPlayersData } = require('../database/helpers');

module.exports = {
  getPlayerData: (req, res) => {
    getAllPlayersData()
      .then(({ rows }) => { res.send(rows); })
      .catch((err) => { console.error(err); });
  },
};
