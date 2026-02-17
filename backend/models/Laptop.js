// backend/models/Laptop.js
const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  // REQUIRED FIELDS:
  // REQUIRED FIELDS:
  brand: { type: String, required: true },
  name: { type: String, required: true },

  // OPTIONAL FIELDS:
  series: { type: String },
  category: { type: [String] },
  price: { type: Number },

  // OPTIONAL BUT IMPORTANT:
  processor: String,
  ram: String,
  storage: String,
  display: String,
  graphics: String,
  images: [String],
  bestFor: String,
  condition: { type: String, default: 'new' },
  specs: [String]
}, { timestamps: true });

laptopSchema.index({ brand: 1 });
laptopSchema.index({ series: 1 });
laptopSchema.index({ category: 1 });

module.exports = mongoose.model('Laptop', laptopSchema);

