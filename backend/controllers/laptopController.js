const Laptop = require('../models/Laptop');

// Get all laptops
exports.getAllLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find();
    res.json(laptops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single laptop
exports.getLaptopById = async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id);
    if (!laptop) {
      return res.status(404).json({ message: 'Laptop not found' });
    }
    res.json(laptop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create laptop
exports.createLaptop = async (req, res) => {
  const laptop = new Laptop(req.body);
  try {
    const newLaptop = await laptop.save();
    res.status(201).json(newLaptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update laptop
exports.updateLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!laptop) {
      return res.status(404).json({ message: 'Laptop not found' });
    }
    res.json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete laptop
exports.deleteLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndDelete(req.params.id);
    if (!laptop) {
      return res.status(404).json({ message: 'Laptop not found' });
    }
    res.json({ message: 'Laptop deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

