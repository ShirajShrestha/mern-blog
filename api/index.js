import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";

const app = express();
dotenv.config();

app.use(express.json());

// Database Connection
try {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
} catch (error) {
  console.log(error);
}

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server started..");
});
