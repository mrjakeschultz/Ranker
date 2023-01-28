const Sequelize = require("sequelize");
const UserVotes = require("./user_votes");
const Users = require("./users");

//get connection set up
const connection = require("../config/connection");

// Games model
const Games = connection.define("games", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	release_date: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	platform: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	genre: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	createdAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
	},
	updatedAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
}});

module.exports = Games;
