//Master function to run when hitting /api/games route, upon page load
//queries the DB for all games and returns them to the client as well as the score/rank from the 'user_votes' table.

const express = require("express");
const router = express.Router();
const gamesRouter = require("./api/api.games");
const votesRouter = require("./api/api.votes");
const { application } = require("express");
const sequelize = require("sequelize");
const signUpRouter = require("./authentication/signUpRoutes");
const loginRouter = require("./authentication/loginRoutes");

//Use our api routes
router.use("/", gamesRouter);
router.use("/", votesRouter);

//Use our authentication routes
router.use("/", signUpRouter);
router.use("/", loginRouter);

router.get("/", (req, res) => {
	res.render("home.handlebars");
});

module.exports = router;
