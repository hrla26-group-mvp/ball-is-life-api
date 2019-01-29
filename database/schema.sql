-- DROP DATABASE IF EXISTS ballislife;

-- CREATE DATABASE ballislife;

-- USE ballislife;

CREATE TABLE player_data (
  id SERIAL PRIMARY KEY,
  api_id VARCHAR(255),
  full_name VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  position VARCHAR(255),
  primary_position VARCHAR(255),
  games_played INT,
  minutes_per_game DECIMAL(3, 1),
  points_per_game DECIMAL(3, 1),
  off_rebounds_per_game DECIMAL(3, 1),
  def_rebounds_per_game DECIMAL(3, 1),
  rebounds_per_game DECIMAL(3, 1),
  assists_per_game DECIMAL(3, 1),
  steals_per_game DECIMAL(3, 1),
  blocks_per_game DECIMAL(3, 1),
  turnovers_per_game DECIMAL(3, 1),
  personal_fouls_per_game DECIMAL(3, 1),
  flagrant_fouls_per_game DECIMAL(3, 1),
  blocked_att_per_game DECIMAL(3, 1),
  field_goals_made_per_game DECIMAL(3, 1),
  field_goals_att_per_game DECIMAL(3, 1),
  three_points_made_per_game DECIMAL(3, 1),
  three_points_att_per_game DECIMAL(3, 1),
  free_throws_made_per_game DECIMAL(3, 1),
  free_throws_att_per_game DECIMAL(3, 1),
  two_points_made_per_game DECIMAL(3, 1),
  two_points_att_per_game DECIMAL(3, 1),
  efficiency_per_game DECIMAL(3, 1),
  true_shooting_att_per_game DECIMAL(3, 1),
  points_off_turnovers_per_game DECIMAL(3, 1),
  points_in_paint_made_per_game DECIMAL(3, 1),
  points_in_paint_att_per_game DECIMAL(3, 1),
  points_in_paint_per_game DECIMAL(3, 1),
  fouls_drawn_per_game DECIMAL(3, 1),
  offensive_fouls_per_game DECIMAL(3, 1),
  fast_break_pts_per_game DECIMAL(3, 1),
  fast_break_att_per_game DECIMAL(3, 1),
  fast_break_made_per_game DECIMAL(3, 1),
  second_chance_pts_per_game DECIMAL(3, 1),
  second_chance_att_per_game DECIMAL(3, 1),
  second_chance_made_per_game DECIMAL(3, 1)
);