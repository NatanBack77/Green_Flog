import fs from "node:fs";
import { NotFound } from "../helpers/Api-errors";

export async function findGamesService(game: string) {
	const inicio = performance.now();

	const data = await fs.readFileSync("./steamGames.json", "utf-8");
	const games = JSON.parse(data);

	const item = await games.find((item: any) => item.name === game);

	const fim = performance.now();
	console.log(`A operação levou ${fim - inicio} milissegundos`);

	return item;
}
