import "dotenv/config";
import "express-async-errors";
import cors from "cors";
import { errors } from "celebrate";

import express, { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import { routes } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  console.log(error);
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export { app };
