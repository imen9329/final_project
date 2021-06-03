import User from "../models/User.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

// register user

export const Register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const findUser = await User.findOne({ email });

        if (findUser) {
            return res
                .status(400)
                .send({ errors: [{ msg: "email should be unique" }] });
        }

        const newUser = new User({ ...req.body });
        const hashedpassword = await bcrypt.hash(password, saltRounds);
        newUser.password = hashedpassword;

        await newUser.save();

        const token = jwt.sign(
            {
                id: newUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "5h" }
        );

        res.status(200).send({
            msg: "new user is added successfully",
            user: newUser,
            token,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "user didn't register" }] });
    }
};

// login user

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const findUser = await User.findOne({ email });

        if (!findUser) {
            return res
                .status(400)
                .send({ errors: [{ msg: "bad credential" }] });
        }

        const comparePass = await bcrypt.compare(password, findUser.password);

        if (!comparePass) {
            return res
                .status(400)
                .send({ errors: [{ msg: "bad credential" }] });
        }
        // creer token
        const token = jwt.sign(
            {
                id: findUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "3h" }
        );
        res.status(200).send({
            msg: "login successfully",
            user: findUser,
            token,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "can not login" }] });
    }
};

// update profile

// // get user profile
// // @desc    Get user profile
// // @route   GET /api/users/profile
export const GetUserProfile = async (req, res) => {
    try {
        const user = await await User.findById(req.user._id).select(
            "-password"
        );
        if (user) {
            res.status(200).send({ msg: "user found", user });
        }
    } catch (error) {
        res.status(404).send({ msg: "User not found" });
    }
};

// delete user
export const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            res.status(400).send({ message: "no user with this id" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).send({ msg: "server error" });
    }
};

// update user
export const updateUser = async (req, res) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { ...req.body } },
            { new: true }
        );

        res.status(200).send({ msg: "toUpdate", user });
    } catch (error) {
        res.status(500).send({ msg: error });
    }
};
export const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.status(200).send("deleted");
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "cannot find any contact" });
    }
};
// @desc    Get all users
// @route   GET /api/users/clients
// @access  Private/Admin
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({ role: "user" });
        if (users) {
            res.status(200).send(users);
        }
    } catch (error) {
        res.status(500).send({ msg: "server error" });
    }
};
// @desc    Get all providers
// @route   GET /api/users/providers
// @access  Private/Admin
export const getProviders = async (req, res) => {
    try {
        const providers = await User.find({ role: "provider" }).select(
            "-password"
        );
        res.status(200).send(providers);
    } catch (error) {
        res.status(500).send({ msg: "server error" });
    }
};

// ADD to cart

export const addToCart = async (req, res) => {
    try {
        const newProduct = reg.body.newProduct;
        const user = await User.findOne({ _id: req.params.id });
        if (user) {
            const productExist = user.cart.find(
                (e) => e._id === newProduct._id
            );
            if (productExist) {
                res.status(401).send({ msg: "product already in cart" });
            }
            let x = [...user.cart, newProduct];
            await User.findByIdAndUpdate({ _id: req.params.id }, { cart: x });
            res.status(200).send({ msg: "product added to cart" });
        }
    } catch (error) {
        res.status(500).send({ msg: "fail to add product to cart" });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const productToRemove = req.body.productToRemove;
        const user = await User.findOne({ _id: req.params.id });
        const x = user.cart;
        const y = x.filter((el) => el._id !== productToRemove._id);
        await User.findByIdAndUpdate({ _id: req.params.id }, { cart: y });
        res.status(200).send({ msg: "product removed from cart" });
    } catch (error) {
        res.status(500).send({ msg: "fail to remove product from cart" });
    }
};
