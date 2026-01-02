const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import Routes
const laptopRoutes = require('./routes/laptops');
const secondhandRoutes = require('./routes/secondhand');
const accessoryRoutes = require('./routes/accessories');
const repairRoutes = require('./routes/repairs');
const adminRoutes = require('./routes/admin');

// Use Routes
app.use('/api/laptops', laptopRoutes);
app.use('/api/secondhand', secondhandRoutes);
app.use('/api/accessories', accessoryRoutes);
app.use('/api/repairs', repairRoutes);
app.use('/api/admin', adminRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('BRAINTONE API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
