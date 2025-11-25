import { router } from "./routes";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

const port = 3333;

const message = `Servidor iniciado na porta ${port}. -- [${new Date().toLocaleString()}] `;

//middleware global
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof Error) {
		return res.status(400).json({
			error: err.message,
		});
	}
	return res.status(500).json({
		status: "error",
		message: "Internal server error.",
	});
});

app.listen(port, () => {
	console.log(message);
});
