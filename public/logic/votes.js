document.querySelectorAll(".upvote-button").forEach((button) => {
	button.addEventListener("click", (event) => {
		const gameId = event.target.dataset.gameId;
		// This grabs the user.id from the current seesion info. stores it in the variable like a boss
		const userId = getUserIdFromSession({});

		// Makes the request to to write a new row in user_votes with the upvote score
		writeVoteToDatabase(gameId, userId, 1);
	});
});

document.querySelectorAll(".downvote-button").forEach((button) => {
	button.addEventListener("click", (event) => {
		const gameId = event.target.dataset.gameId;
		// Same shit. Grabs the user.id value
		const userId = getUserIdFromSession({});

		// same request to the server to write new row in user_votes, just for the downvote score
		writeVoteToDatabase(gameId, userId, -1);
	});
});

function getUserIdFromSession(options) {
	return options.userId;
}

// function updateGameScore(gameId, score) {
// 	const gameRow = document.querySelector(`[data-game-id="${gameId}"]`);
// 	if (gameRow) {
// 		const scoreElement = gameRow.querySelector(".game-score");
// 		scoreElement.textContent = score;
// 	}
// }

function writeVoteToDatabase(gameId, userId, score) {
	fetch("/api/votes", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ gameId, userId, score }),
	})
		.then((res) => res.json())
		.then((data) => {
			// If the vote was successfully written to the db, update the score for the game on the front-end
			// updateGameScore(gameId, data.score);
			console.log(
				"Great job! The vote was successfully written to the database"
			);
		});
}
