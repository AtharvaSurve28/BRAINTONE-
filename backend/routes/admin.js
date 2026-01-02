const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { authMiddleware, JWT_SECRET } = require('../middleware/auth');
const laptopController = require('../controllers/laptopController');
const Laptop = require('../models/Laptop');

// Admin Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide username and password' });
    }

    // Find admin
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { adminId: admin._id, username: admin.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all laptops (admin view - returns all data)
router.get('/laptops', authMiddleware, laptopController.getAllLaptops);

// Get single laptop by ID
router.get('/laptops/:id', authMiddleware, laptopController.getLaptopById);

// Create new laptop
router.post('/laptops', authMiddleware, laptopController.createLaptop);

// Update laptop
router.put('/laptops/:id', authMiddleware, laptopController.updateLaptop);

// Delete laptop
router.delete('/laptops/:id', authMiddleware, laptopController.deleteLaptop);

// Get laptops by brand (for filtering in admin panel)
router.get('/laptops/brand/:brand', authMiddleware, async (req, res) => {
  try {
    const laptops = await Laptop.find({ brand: req.params.brand.toLowerCase() });
    res.json(laptops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

