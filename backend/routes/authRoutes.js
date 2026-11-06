import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 2 * 60 * 60 * 1000
};

// ADMIN LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }

    const admin = await Admin.findOne({
      email: email.trim().toLowerCase()
    });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // Compare password with bcrypt hash
    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: admin._id.toString(),
        role: "admin"
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    // Store JWT in HttpOnly cookie
    res.cookie("adminToken", token, cookieOptions);

    res.json({
      message: "Login successful",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email
      }
    });

  } catch (error) {
    console.error("Login error:", error.message);

    res.status(500).json({
      message: "Login failed"
    });
  }
});

// CHECK LOGIN SESSION
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id)
      .select("-password");

    if (!admin) {
      return res.status(401).json({
        message: "Admin not found"
      });
    }

    res.json({ admin });

  } catch (error) {
    res.status(500).json({
      message: "Unable to check session"
    });
  }
});

// ADMIN LOGOUT
router.post("/logout", (req, res) => {
  res.clearCookie("adminToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/"
  });

  res.json({
    message: "Logout successful"
  });
});

export default router;