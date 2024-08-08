"user server"

import mongoose from "mongoose"

const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string)
    console.log("bd connected...");
  } catch (error) {
    console.error(error);
  }
}

export default connect