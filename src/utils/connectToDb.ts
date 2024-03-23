import mongoose from "mongoose";
import config from "config";

async function connectToDb() {

    const dbUrl = config.get<string>("DB_URL");
    
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1)
    }
}

export default connectToDb;