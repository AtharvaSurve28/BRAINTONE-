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
  try {
    const laptopData = { ...req.body };


    // Handle image uploads
    if (req.files && req.files.length > 0) {
      // With Cloudinary, file.path is the full URL
      laptopData.images = req.files.map(file => file.path);
      laptopData.image = laptopData.images[0]; // Synchronize singular image field
    }

    // Handle specs and other arrays if sent as strings (via FormData)
    if (typeof laptopData.specs === 'string') {
      try {
        laptopData.specs = JSON.parse(laptopData.specs);
      } catch (e) {
        laptopData.specs = laptopData.specs.split(',').map(s => s.trim()).filter(Boolean);
      }
    }

    if (laptopData.price) laptopData.price = Number(laptopData.price);

    const laptop = new Laptop(laptopData);
    const newLaptop = await laptop.save();
    res.status(201).json(newLaptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update laptop
exports.updateLaptop = async (req, res) => {
  try {
    console.log('--- Update Laptop Request ---');
    console.log('ID:', req.params.id);
    console.log('Files:', req.files);
    const laptopData = { ...req.body };


    // Handle image updates (Merging old + new)
    let finalImages = [];

    // 1. Get existing images that are kept (sent as JSON string from frontend)
    if (laptopData.existingImages) {
      try {
        finalImages = JSON.parse(laptopData.existingImages);
      } catch (e) {
        finalImages = Array.isArray(laptopData.existingImages) ? laptopData.existingImages : [laptopData.existingImages];
      }
    }

    // 2. Add new uploads
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map(file => file.path);
      finalImages = [...finalImages, ...newImages];
    }

    // 3. Update the data
    if (finalImages.length > 0) {
      laptopData.images = finalImages;
      laptopData.image = finalImages[0];
    }

    // Handle specs if sent as strings
    if (typeof laptopData.specs === 'string') {
      try {
        laptopData.specs = JSON.parse(laptopData.specs);
      } catch (e) {
        laptopData.specs = laptopData.specs.split(',').map(s => s.trim()).filter(Boolean);
      }
    }

    if (laptopData.price) laptopData.price = Number(laptopData.price);

    const laptop = await Laptop.findByIdAndUpdate(
      req.params.id,
      laptopData,
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

