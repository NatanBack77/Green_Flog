const express = require("express");
const { findGamesController } = require("./Controllers/FindGameController");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
	
	await res.send(findGamesController);
});
app.listen(3000);
