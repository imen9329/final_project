console.clear();
import express from "express";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import user from "./router/user.js";
import product from "./router/product.js";

const app = express();

dotenv.config();

connectDB();

// router
// user
app.use(express.json());
app.use("/api/user", user);

// products
app.use("/api/product", product);

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is running on PORT ${PORT}`)
);
