const path = require("path");
const express = require("express");

const app = express();

const staticDirPath = path.join(__dirname, "../static");

app.use(express.static(staticDirPath));

app.get("/data", (req, res) => {
	res.send({
		name: "shaik Rehanuddin",
		age: 21,
	});
});

app.listen(3000, () => {
	console.log("Server Running on port 3000");
});
