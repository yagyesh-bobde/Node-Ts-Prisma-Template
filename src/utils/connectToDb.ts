import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connectToDb() {

    const dbUrl = config.get<string>("DB_URL");
    
    try {
        await mongoose.connect(dbUrl);
        log.info("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1)
    }
}

export default connectToDb;