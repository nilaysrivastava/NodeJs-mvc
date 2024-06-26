const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticate(req, res, next) {
  const authorizationHeader = req.header("Authorization");

  if (!authorizationHeader) {
    return res
      .status(401)
      .json({ error: "Access denied: Missing authorization header" });
  }

  const token = authorizationHeader.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(400).json({ error: "Invalid token" });
  }
}

module.exports = { authenticate };
