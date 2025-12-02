import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { LoginUserController } from "./controllers/user/LoginUserController";
import { InfoUserController } from "./controllers/user/InfoUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import multer from "multer";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";

export const router = Router();

// Middleware de arquivo

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas de usuarios //

router.post("/signup", new CreateUserController().handle);

router.post("/login", new LoginUserController().handle);

router.get("/me", isAuthenticated, new InfoUserController().handle);

// Rotas de Categorias //

router.post(
	"/add/category",
	isAuthenticated,
	new CreateCategoryController().handle
);

router.get("/categories", isAuthenticated, new ListCategoryController().handle);

// Rotas de Produtos //

router.post(
	"/add/product",
	isAuthenticated,
	upload.single("file"),
	new CreateProductController().handle
);

router.get(
	"/products",
	isAuthenticated,
	new ListProductByCategoryController().handle
);

//  Rotas de Pedidos //

router.post("/add/order", isAuthenticated, new CreateOrderController().handle);

router.delete(
	"/remove/order",
	isAuthenticated,
	new DeleteOrderController().handle
);
