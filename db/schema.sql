-- DROP DATABASE IF EXISTS games_db;

CREATE DATABASE games_db;

USE games_db;

-- CREATE TABLE games (
--   id INT(11) AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   release_date DATE NOT NULL,
--   platform VARCHAR(255) NOT NULL,
--   genre VARCHAR(255) NOT NULL,
--   created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE users (
--   id INT(11) AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(255) NOT NULL,
--   last_name VARCHAR(255) NOT NULL,
--   username VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE user_votes (
-- #---Will write query in code to concatenate game_id and user_id values for this rank_id primary key
--   game_id INT(11) NOT NULL,
--   user_id INT(11) NOT NULL,
--   game VARCHAR(255) NOT NULL,
--   score TINYINT(1) NOT NULL CHECK (score = -1 OR score = 1),
--   created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (game_id, user_id),
--   FOREIGN KEY (game_id) REFERENCES games(id),
--   FOREIGN KEY (user_id) REFERENCES users(id)
-- );