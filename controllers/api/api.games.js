const express = require("express");
const router = express.Router();
const { application } = require("express");
const sequelize = require("../../config/connection");

router.get("/api/games", (req, res) => {
	getGames()
		.then((games) => {
			res.render("allGames", { games: games });
		})
		.catch((error) => {
			console.error(error);
		});
});

async function getGames() {
	//query the DB for all games
	const games = await sequelize.query(
		`SELECT games.id, games.name, games.genre, games.release_date, SUM(user_votes.score) AS score_sum
    FROM games
    LEFT JOIN user_votes ON games.id = user_votes.game_id
    GROUP BY games.id, games.name`,
		{ type: sequelize.QueryTypes.SELECT }
	);

	// console.log(games);
	return games;
}

module.exports = router;
