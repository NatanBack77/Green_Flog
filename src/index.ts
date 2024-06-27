import express, { type Request, type Response } from "express";
import { handle } from "./controllers/getGamesController";

const app = express();

app.use(express.json());

app.post("/", async (req: Request, res: Response) => {
	res.send(await handle);
});
app.listen(3000);
