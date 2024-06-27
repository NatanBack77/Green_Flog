const fs = require("node:fs");

async function findGamesController() {
	const inicio = performance.now();

	const data = await fs.readFileSync("./steamGames.json", "utf-8");
	const games = JSON.parse(data);
	const item = await games.find((item) => item.name === "The Apple");

	const fim = performance.now();
	console.log(`A operação levou ${fim - inicio} milissegundos`);
	return item;
}
module.exports = { findGamesController };
