import "express-async-errors";
import express, { Request, NextFunction, Response } from "express";
import { routes } from "./routes";
import { AppError } from "./utils/appError";

const app = express();
app.use(express.json());

app.use(routes);

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.status(404).json({ message: "Esta rota não existe" });
});

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error. Try again.",
    });
  }
);

app.listen(8080, () => console.log("Server is running in PORT 8080"));
