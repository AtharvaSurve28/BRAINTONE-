const mongoose = require('mongoose');

const repairSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true
  },
  description: String,
  estimatedPrice: {
    type: Number,
    required: true
  },
  estimatedTime: String, // e.g., "2-3 days"
  category: {
    type: String,
    enum: ['Hardware', 'Software', 'Screen', 'Battery', 'Other']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Repair', repairSchema);

