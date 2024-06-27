import express, { type Request, type Response } from "express";
import { findGameController } from "./Controllers/FindGameController";

const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
	findGameController.name
});

app.listen(3000);
