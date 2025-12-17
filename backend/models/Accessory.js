const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Mouse', 'Keyboard', 'Laptop Bag', 'Charger', 'Other'],
    required: true
  },
  brand: String,
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

module.exports = mongoose.model('Accessory', accessorySchema);

