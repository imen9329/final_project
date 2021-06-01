import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("database is connected");
    } catch (error) {
        console.log("database is not connected", error);
    }
};

export default connectDB;
