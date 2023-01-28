const Sequelize = require("sequelize");
const Games = require("./games");
const UserVotes = require("./user_votes");

//get connection set up
const connection = require("../config/connection");

// Users model
const Users = connection.define("users", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},

	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	email: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true,
	},
	created: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
	},
});

module.exports = Users;
