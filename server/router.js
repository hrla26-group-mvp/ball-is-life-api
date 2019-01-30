const router = require('express').Router();
const { getPlayerData } = require('./playerData/controller');

// ROUTES HERE - MAKE SURE EVERYONE REBASES
router.route('/data/')
  .get(getPlayerData);

module.exports = router;
