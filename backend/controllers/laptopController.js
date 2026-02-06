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


    // Handle image uploads
    if (req.files && req.files.length > 0) {
      // With Cloudinary, file.path is the full URL
      const newImages = req.files.map(file => file.path);
      laptopData.images = newImages;
      laptopData.image = newImages[0]; // Synchronize singular image field
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

