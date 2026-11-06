import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.adminToken;

    if (!token) {
      return res.status(401).json({
        message: "Authentication required. Please login."
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    req.admin = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};

export default authMiddleware;