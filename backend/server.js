const express = require('express');
const fs = require('fs');
const cors = require('cors');

require('dotenv').config();

const connectDB = require('./config/db');

const app = express();

const path = require('path');

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import Routes
const laptopRoutes = require('./routes/laptops');
const adminRoutes = require('./routes/admin');

// Use Routes
app.use('/api/laptops', laptopRoutes);
app.use('/api/admin', adminRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('BRAINTONE API is running...');
});

// Global Error Handler
app.use((err, req, res, next) => {
  const errorLog = `!!! ERROR !!! ${new Date().toISOString()}\n` +
    `Message: ${err.message}\n` +
    `Stack: ${err.stack}\n`;
  try { fs.appendFileSync(debugPath, errorLog); } catch (e) { }
  console.error('SERVER ERROR:', err);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
