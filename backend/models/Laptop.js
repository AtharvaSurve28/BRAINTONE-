const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  processor: String,
  ram: String,
  storage: String,
  graphics: String,
  display: String,
  price: {
    type: Number,
    required: true
  },
  image: String,
  inStock: {
    type: Boolean,
    default: true
  },
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Laptop', laptopSchema);

