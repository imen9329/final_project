import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];

        if (!token) {
            return res
                .status(401)
                .send({ errors: [{ msg: "you are not authorized1" }] });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findOne({ _id: decoded.id }).select(
            "-password"
        );

        if (!user) {
            return res
                .status(401)
                .send({ errors: [{ msg: "you are not authorized2" }] });
        }

        req.user = user;

        next();
    } catch (error) {
        res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(401).send("Not authorized as an admin");
    }
};

export const isProvider = (req, res, next) => {
    if (req.user && req.user.role === "provider") {
        next();
    } else {
        res.status(401).send("Not authorized as a provider");
    }
};
