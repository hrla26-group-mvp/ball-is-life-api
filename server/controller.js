const { getAllPlayersData } = require('../database/helpers');

// CONTROLLER FUNCTIONS HERE - MAKE SURE EVERYONE REBASES
module.exports = {
  getPlayerData: (req, res) => {
    getAllPlayersData
      .then((data) => { res.send(data); })
      .catch((err) => { console.error(err); });
  },
};
