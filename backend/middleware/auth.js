// backend/middleware/auth.js - SAFE VERSION
const jwt = require('jsonwebtoken');

// NO DEFAULT VALUE - Force environment variable
const JWT_SECRET = process.env.JWT_SECRET;

// Validate on startup
if (!JWT_SECRET) {
  console.error('FATAL: JWT_SECRET environment variable is not set');
  // In production, you might want to exit:
  // process.exit(1);
}

// Auth middleware
const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer TOKEN
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.adminId = decoded.adminId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = { authMiddleware };


