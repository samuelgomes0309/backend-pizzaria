import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

export const router = Router();

// Rotas de usuarios //

router.post("/signup", new CreateUserController().handle);

router.get("/login", new CreateUserController().handle);
