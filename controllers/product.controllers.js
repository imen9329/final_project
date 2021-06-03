import Product from "../models/Product.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

// get all products

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "couldn't get products" }] });
    }
};

// get product byId
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById({ _id: id });
        res.status(200).send(product);
    } catch (error) {
        res.status(404).send({
            errors: [{ msg: "couldn't find the product" }],
        });
    }
};

// post new product

export const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).send({ msg: "product added", newProduct });
    } catch (error) {
        res.status(500).send({
            errors: [{ msg: "couldn't add product", error }],
        });
    }
};

// delete product
export const removeProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const removeProduct = await Product.findById({ _id: id });
        if (removeProduct) {
            await removeProduct.remove();
            res.status(200).send({ msg: "product deleted", removeProduct });
        }
    } catch (error) {
        res.status(500).send({
            errors: [{ msg: "couldn't delete product" }],
        });
    }
};

// review a product

export const createProductReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { rating, comment, userId } = req.body;

        const product = await Product.findById({ _id: id });
        const user = await User.findById({ _id: userId });

        if (product) {
            const alreadyReviewed = product.reviews.find(
                (r) => r.userId.toString() === userId.toString()
            );

            if (alreadyReviewed) {
                res.status(400).send({ msg: "Product already reviewed" });
            }

            const review = {
                name: user.name,
                rating: Number(rating),
                comment: comment,
                userId: req.user._id,
            };

            product.reviews.push(review);

            product.numReviews = product.reviews.length;

            product.rating =
                product.reviews.reduce((acc, item) => item.rating + acc, 0) /
                product.reviews.length;

            await product.save();
            res.status(201).send({ msg: "Review added" });
        }
    } catch (error) {
        res.status(404).send({ msg: "Product not found" });
    }
};
