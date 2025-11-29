import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { LoginUserController } from "./controllers/user/LoginUserController";
import { InfoUserController } from "./controllers/user/InfoUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

export const router = Router();

// Rotas de usuarios //

router.post("/signup", new CreateUserController().handle);

router.post("/login", new LoginUserController().handle);

router.get("/me", isAuthenticated, new InfoUserController().handle);

// Rotas de Categorias/Produtos //

router.post(
	"/add/category",
	isAuthenticated,
	new CreateCategoryController().handle
);
