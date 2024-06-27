import type { Request, Response } from "express";
import { findGamesService } from "../Services/FindGameService";

export async function handle(req: Request, res: Response) {
	const { game } = req.body;
    
	const result = findGamesService(game);
	return result;
}
