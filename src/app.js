const path = require("path");
const express = require("express");
const hbs = require("hbs");

// creating web server.............
const app = express();

// paths for different dirs
const staticDirPath = path.join(__dirname, "../static");
const viewsDirPath = path.join(__dirname, "../templates/views");
const partialsDirPath = path.join(__dirname, "../templates/partials");

// App variables
app.set("view engine", "hbs");
app.set("views", viewsDirPath);
hbs.registerPartials(partialsDirPath);

// static dir setup
app.use(express.static(staticDirPath));

app.get("", (req, res) => {
	res.render("index", {
		title: "Home Page",
		credits: "Shaik Rehan",
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		title: "About Page",
		credits: "Shaik Rehan",
	});
});

app.get("/help", (req, res) => {
	res.render("help", {
		title: "Help Page",
		credits: "Shaik Rehan",
	});
});

app.get("/data", (req, res) => {
	res.send({
		name: "shaik Rehanuddin",
		age: 21,
	});
});

app.get("/about/*", (req, res) => {
	res.render("404", {
		message: "Article Not Found....",
	});
});

app.get("/*", (req, res) => {
	res.render("404", {
		message: "404! Page Not Found..",
	});
});

// Starting Web server........
app.listen(3000, () => {
	console.log("Server Running on port 3000");
});
