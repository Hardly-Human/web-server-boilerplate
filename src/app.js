const path = require("path");
const express = require("express");

const app = express();

const staticDirPath = path.join(__dirname, "../static");

app.set("view engine", "hbs");
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

app.listen(3000, () => {
	console.log("Server Running on port 3000");
});
