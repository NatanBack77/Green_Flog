export class ApiError extends Error {
	public readonly statusCode: number;
	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
	}
}
export class NotFound extends ApiError {
	constructor(message: string) {
		super(message, 404);
	}
}
