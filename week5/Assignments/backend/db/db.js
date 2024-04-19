import mongoose, { connect } from "mongoose";
import { MONGO_URL, DB_NAME } from "../constant.js";

async function connectDB() {
  try {
    const connect = await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
    console.log(`\n MongoDB connected !! DB HOST: ${connect.connection.host}`);
  } catch (error) {
    console.log("MongoDb connection Failed", error);
    process.exit(1);
  }
}

export default connectDB;
