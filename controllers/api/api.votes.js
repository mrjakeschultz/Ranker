const express = require("express");
const router = express.Router();
const { application } = require("express");
const sequelize = require("../../config/connection");
const UserVotes = require("../../models/user_votes");
const Games = require("../../models/games");

router.post("/api/votes", (req, res) => {
	const { gameId, score } = req.body;
	const { userId } = req.session;
	Games.findOne({
		where: { id: gameId },
		attributes: ["name"],
	})
		.then((game) => {
			console.log(res.session);
			UserVotes.create({
				game_id: gameId,
				user_id: userId,
				score,
				game: game.name,
			}).then((vote) => {
				console.log(vote);
			});
		})
		// 		.then((vote) => {
		// 			// OPTIONAL: sends the updated score for the game as a response if the vote was properly written to the db
		// 			res.json({ score: vote.score });
		// 		})
		// 		.catch((err) => {
		// 			res.status(500).json({ message: err.message });
		// 		});
		// })
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});

module.exports = router;
