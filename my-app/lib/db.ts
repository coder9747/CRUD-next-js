import mongoose from "mongoose";
export default async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.mongo_uri || "");
        console.log('database connected succesful');

    } catch (error) {
        throw new Error("Database Connection Failed");
    }
}