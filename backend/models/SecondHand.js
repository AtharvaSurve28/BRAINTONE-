const mongoose = require('mongoose');

const secondHandSchema = new mongoose.Schema({
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
  condition: {
    type: String,
    enum: ['Excellent', 'Good', 'Fair'],
    required: true
  },
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

module.exports = mongoose.model('SecondHand', secondHandSchema);

