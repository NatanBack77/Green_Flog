import type { NextFunction, Request, Response } from "express";
import type { ApiError } from "../helpers/Api-errors";
export const middlewareError = (
	error: Error & Partial<ApiError>,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const statusCode = error.statusCode ?? 500;
	const message = error.statusCode ? error.message : "Internal Server Error";
	res.status(statusCode).json({ message });
};
