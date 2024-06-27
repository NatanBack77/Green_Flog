 const fs=require("node:fs");


	const data = fs.readFileSync("../../steamGames.json", "utf-8");
	const games = JSON.parse(data);
	console.log(games)

