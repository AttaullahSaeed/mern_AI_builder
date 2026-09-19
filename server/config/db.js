import mongoose from "mongoose";
import dns from "node:dns";

// Force Node.js to use Google & Cloudflare DNS
dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log(error);
  }
};
