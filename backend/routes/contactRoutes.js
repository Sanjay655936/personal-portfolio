import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return res.status(400).json({
        message: "Enter a valid email"
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    });

    res.status(201).json({
      message: "Message saved successfully",
      id: contact._id
    });

  } catch (error) {
    res.status(500).json({
      message: "Unable to save message"
    });
  }
});

export default router;