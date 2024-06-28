import express, { type Request, type Response } from "express";
import { z } from "zod";
import { findGamesService } from "./Services/FindGameService";
import { NotFound } from "./helpers/Api-errors";
import { middlewareError } from "./middlewares/errors";

const app = express();

app.use(express.json());

app.post("/", middlewareError, async (req: Request, res: Response) => {
	const GameSchema = z.object({
		game: z.string(),
	});
	try {
		const { game } = GameSchema.parse(req.body);
		const result = await findGamesService(game);
		if (typeof result === "undefined") {
			res.status(404).json("Game Not Found");
		}
		res.status(200).send(result);
		console.log(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

app.listen(30001);
