import { NextFunction, Request, Response } from "express";
import createHttpError, { HttpError } from "http-errors";

const errorNotFoundRouteMiddleware = (req: Request, res: Response, next: NextFunction) => {
    next(createHttpError.NotFound());
}

const errorMiddleware = (
    error: HttpError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status: number = error.status || 500;
    const message: string = error.message || "Something went wrong";

    res.status(status).json({ message });
};

export {
    errorNotFoundRouteMiddleware,
    errorMiddleware
}