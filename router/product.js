import express from "express";
import {
    addProduct,
    createProductReview,
    getProductById,
    getProducts,
    removeProduct,
} from "../controllers/product.controllers.js";
import { isAdmin, isAuth, isProvider } from "../middleware/isAuthen.js";
import { validateProduct } from "../middleware/validateProduct.js";
import { validation } from "../middleware/validateUser.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.post("/:id", isAuth, isProvider, removeProduct);
router.post("/:id/reviews", isAuth, createProductReview);

export default router;
