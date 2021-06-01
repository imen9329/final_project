import { check } from "express-validator";

export const validateProduct = () => [
    check("name", "name is required").notEmpty(),
    check("image", "please enter an image of the product").notEmpty(),
    check("description", "description is required").notEmpty(),
    check("price", "price is required").notEmpty(),
    check("countInStock", "countInStock is required").notEmpty(),
    check("rating", "rating is required").notEmpty(),
    check("numReviews", "numReviews is required").notEmpty(),
];
