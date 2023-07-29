import mongoose, { Connection } from "mongoose";
import "dotenv/config";

const DB_URI = <string>process.env.MONGODB_CNN;

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 30000,
};

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(DB_URI, mongoOptions);

    console.log("online");
  } catch (error) {
    console.log(error);
    throw new Error("error en la conecccion");
  }
};

export default connectToMongoDB;
