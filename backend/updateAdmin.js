import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

dotenv.config();

const updateAdmin = async () => {
  try {
    await connectDB();

    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    const hashedPassword = await bcrypt.hash(password, 12);

    const admin = await Admin.findOneAndUpdate(
      { role: "admin" },
      {
        email: email.toLowerCase(),
        password: hashedPassword
      },
      { new: true }
    );

    if (admin) {
      console.log("Admin credentials updated successfully!");
    } else {
      console.log("Admin account not found!");
    }

    process.exit(0);
  } catch (error) {
    console.error("Update failed:", error.message);
    process.exit(1);
  }
};

updateAdmin();