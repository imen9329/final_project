import { validationResult, check } from "express-validator";

export const registerValidate = () => [
    check("name", "name is required").notEmpty(),
    check("email", "please enter a valid email").isEmail(),
    check("password", "password is required").notEmpty(),
    check("phone", "phone is required").notEmpty(),
    check("password", "password should contain more than 6 character").isLength(
        { min: 6 }
    ),
];

export const loginValidate = () => [
    check("email", "please enter a valid email").isEmail(),
    check("password", "password is not correct").isLength({ min: 6 }),
];

export const passValidate = () => [
    check("password", "must contain more than 6 character").isLength({
        min: 6,
    }),
];

export const validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};
