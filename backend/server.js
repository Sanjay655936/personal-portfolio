import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

import authRoutes from "./routes/authRoutes.js";
import githubRoutes from "./routes/githubRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

import authMiddleware from "./middleware/authMiddleware.js";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();

app.use(helmet());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100
});

app.use("/api", apiLimiter);

app.get("/api/health", (req, res) => {
  res.json({
    status: "Portfolio backend is running"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/contact", contactRoutes);

// Protected admin dashboard API
app.get("/api/admin/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to the Admin Dashboard"
  });
});

// Create first admin only when no admin exists.
// Set ADMIN_EMAIL and ADMIN_PASSWORD in backend/.env.
const createFirstAdmin = async () => {
  const adminExists = await Admin.findOne();

  if (!adminExists) {
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
      throw new Error(
        "Set ADMIN_EMAIL and ADMIN_PASSWORD in backend/.env"
      );
    }

    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      12
    );

    await Admin.create({
      name: "Portfolio Admin",
      email: process.env.ADMIN_EMAIL.toLowerCase(),
      password: hashedPassword
    });

    console.log("First admin account created");
  }
};

const startServer = async () => {
  try {
    await connectDB();
    await createFirstAdmin();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();