// Script to create initial admin user
// Run this once: npm run create-admin (from backend directory)

const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

const connectDB = require('../config/db');

const createAdmin = async () => {
  try {
    await connectDB();
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists!');
      process.exit(0);
    }

    // Create admin user
    const admin = new Admin({
      username: 'admin',
      password: 'admin123' // Change this password in production!
    });

    await admin.save();
    console.log('Admin user created successfully!');
    console.log('Username: admin');
    console.log('Password: admin123');
    console.log('\n⚠️  IMPORTANT: Change the default password in production!');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
};

createAdmin();

