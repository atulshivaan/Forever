import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Successful connection
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully.");
    });

    // Connection error
    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    // Optional: handle disconnection
    // mongoose.connection.on("disconnected", () => {
    //   console.warn("⚠️ MongoDB disconnected. Retrying...");
    // });

    await mongoose.connect(process.env.MONGODB_URI);

  } catch (err) {
    console.error("🔥 Failed to connect to MongoDB:", err);
    process.exit(1); // Exit process on critical DB error
  }
};

export default connectDB;
