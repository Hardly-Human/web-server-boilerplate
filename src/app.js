const express = require("express");

const app = express();

app.get("", (req, res) => {
	res.send("Hello Express!!");
});

app.get("/about", (req, res) => {
	res.send("<h1>About Page</h1>");
});

app.get("/help", (req, res) => {
	res.send("<h1>Help Page</h1>");
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
