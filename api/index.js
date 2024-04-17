import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// Database Connection
try {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
} catch (error) {
  console.log(error);
}

app.listen(process.env.PORT, () => {
  console.log("Server started..");
});
