import express from "express";
import {
    Register,
    login,
    getUsers,
    getProviders,
    updateUser,
    addToCart,
    removeFromCart,
} from "../controllers/user.controllers.js";
import { isAdmin, isAuth } from "../middleware/isAuthen.js";

import {
    validation,
    registerValidate,
    loginValidate,
} from "../middleware/validateUser.js";

const router = express.Router();

// Register

router.post("/register", registerValidate(), validation, Register);

// login

router.post("/login", loginValidate(), validation, login);

// current

router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "user is authorized", user: req.user });
});

//update
router.put("/:id", updateUser);

//  get all users
// @route   GET /api/users/clients
// @access  Private/Admin

router.get("/admin/clients", isAuth, isAdmin, getUsers);

// @desc    Get all providers
// @route   GET /api/users/providers
// @access  Private/Admin
router.get("/admin/providers", isAuth, isAdmin, getProviders);

// add to cart

router.post("/addToCart/:id", addToCart);

// remove from cart
router.delete("/addToCart/:id", removeFromCart);

export default router;
