const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const session = require("express-session");
const moment = require("moment");
app.use(express.json());
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Bring in the sign up routes
const signUpRoutes = require("./controllers/authentication/signUpRoutes");
app.use("/signup", signUpRoutes);

// Importing my models
const Games = require("./models/games");
const UserVotes = require("./models/user_votes");
const Users = require("./models/users");


const PORT = process.env.PORT || 3001; 


//set handlebars as the view engine + set default layout to main.hbs (actually main.handlebars), like a boss
app.set("views", "./views");
app.engine(
	"handlebars",
	exphbs({
		helpers: {
			moment: function (date, format) {
				return moment(date).format(format);
			},
		},
	})
);
app.set("view engine", "handlebars");

//Configure express-session
app.use(
	session({
		secret: "my-secret", // secret key to sign the session ID cookie
		resave: false, // don't save session if unmodified
		saveUninitialized: false, // don't create session until something is stored
	})
);

// Define static assets
const static = express.static("assets");
app.use(static);

// Import our routes
const Routes = require("./controllers/index");

// Ensure we use the routes
app.use("/", Routes);


sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log("App listening on port 3001");
	});
});
