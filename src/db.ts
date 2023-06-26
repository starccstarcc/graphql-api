import mongoose from "mongoose";
import { config } from "dotenv";
config();

const URL: any =
  process.env.DATABASE || "mongodb://localhost:27017/graphql-api";

const db = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err);
  }
};

export default db;
