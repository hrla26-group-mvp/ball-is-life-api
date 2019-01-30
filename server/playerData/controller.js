const { getAllPlayersData } = require('../../database/helpers');

// CONTROLLER FUNCTIONS HERE - MAKE SURE EVERYONE REBASES
module.exports = {
  getPlayerData: (req, res) => {
    getAllPlayersData()
      .then(({ rows }) => { res.send(rows); })
      .catch((err) => { console.error(err); });
  },
};
