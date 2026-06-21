import mongoose from "mongoose";

export async function connectToDatabase() {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB");
        return conn;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}