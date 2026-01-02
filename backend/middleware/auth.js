const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || '7cc4b86902f6d128f81a7230964c2016f97c01aa21979f0a28e4e6c5c4517881';

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

module.exports = { authMiddleware, JWT_SECRET };

