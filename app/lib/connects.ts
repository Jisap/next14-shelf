"use server"

import mongoose from "mongoose"

const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string)
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
}

export default connect