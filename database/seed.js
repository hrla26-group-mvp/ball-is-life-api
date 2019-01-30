const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { API_KEY } = require('../apiConfig');

const teamIds = [
  '583ecae2-fb46-11e1-82cb-f4ce4684ea4c', // lakers
];

for (let i = 0; i < teamIds.length; i += 1) {
  const url = `https://api.sportradar.us/nba/trial/v5/en/seasons/2018/REG/teams/${teamIds[i]}/statistics.json`;
  axios.get(url, {
    params: { api_key: API_KEY },
  })
    .then(({ data }) => {
      const { players } = data;
      let sql = '';
      for (let j = 0; j < players.length; j += 1) {
        const query = `INSERT INTO player_data (api_id, full_name, first_name, last_name, position, primary_position, games_played, minutes_per_game, points_per_game, off_rebounds_per_game, def_rebounds_per_game, rebounds_per_game, assists_per_game, steals_per_game, blocks_per_game, turnovers_per_game, personal_fouls_per_game, flagrant_fouls_per_game, blocked_att_per_game, field_goals_made_per_game, field_goals_att_per_game, three_points_made_per_game, three_points_att_per_game, free_throws_made_per_game, free_throws_att_per_game, two_points_made_per_game, two_points_att_per_game, efficiency_per_game, true_shooting_att_per_game, points_off_turnovers_per_game, points_in_paint_made_per_game, points_in_paint_att_per_game, points_in_paint_per_game, fouls_drawn_per_game, offensive_fouls_per_game, fast_break_pts_per_game, fast_break_att_per_game, fast_break_made_per_game, second_chance_pts_per_game, second_chance_att_per_game, second_chance_made_per_game)\nVALUES ('${players[j].id}', '${players[j].full_name}', '${players[j].first_name}', '${players[j].last_name}', '${players[j].position}', '${players[j].primary_position}',  ${players[j].total.games_played},  ${players[j].average.minutes},  ${players[j].average.points},  ${players[j].average.off_rebounds},  ${players[j].average.def_rebounds},  ${players[j].average.rebounds},  ${players[j].average.assists},  ${players[j].average.steals},  ${players[j].average.blocks},  ${players[j].average.turnovers},  ${players[j].average.personal_fouls},  ${players[j].average.flagrant_fouls},  ${players[j].average.blocked_att},  ${players[j].average.field_goals_made},  ${players[j].average.field_goals_att},  ${players[j].average.three_points_made},  ${players[j].average.three_points_att},  ${players[j].average.free_throws_made},  ${players[j].average.free_throws_att},  ${players[j].average.two_points_made},  ${players[j].average.two_points_att},  ${players[j].average.efficiency},  ${players[j].average.true_shooting_att},  ${players[j].average.points_off_turnovers},  ${players[j].average.points_in_paint_made},  ${players[j].average.points_in_paint_att},  ${players[j].average.points_in_paint},  ${players[j].average.fouls_drawn},  ${players[j].average.offensive_fouls},  ${players[j].average.fast_break_pts},  ${players[j].average.fast_break_att},  ${players[j].average.fast_break_made},  ${players[j].average.second_chance_pts},  ${players[j].average.second_chance_att},  ${players[j].average.second_chance_made});\n`;

        sql += query;
      }

      fs.writeFile(path.join(__dirname, 'seed.sql'), sql, (err) => {
        if (err) { console.error(err); } else {
          console.log('done writing file');
        }
      });
    })
    .catch((err) => { console.error(err); });
}
