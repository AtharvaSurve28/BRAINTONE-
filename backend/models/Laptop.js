// backend/models/Laptop.js
const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  // REQUIRED FIELDS:
  brand: { type: String, required: true },
  series: { type: String, required: true },
  category: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },

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

