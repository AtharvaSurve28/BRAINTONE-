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
    const id = req.params.id;
    // Try standard findById first
    let laptop = await Laptop.findById(id);

    if (!laptop) {
      console.log('Laptop not found via findById for ID:', id);

      // Fallback: Scan and match string ID (Fix for ObjectId mismatch issue)
      // This helps when Mongoose/Driver versions conflict or ID types are inconsistent
      try {
        const allLaptops = await Laptop.find({});
        const match = allLaptops.find(l => l._id.toString() === id.toString());

        if (match) {
          console.log('Laptop found via fallback string matching:', match.name);
          laptop = match;
        }
      } catch (err) {
        console.error('Fallback scan error:', err);
      }

      if (!laptop) {
        console.log('Laptop truly not found');
        return res.status(404).json({ message: 'Laptop not found' });
      }
    }

    res.json(laptop);
  } catch (error) {
    console.error('Error in getLaptopById:', error);
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

    // Handle category parsing
    if (laptopData.category) {
      if (typeof laptopData.category === 'string') {
        try {
          const parsed = JSON.parse(laptopData.category);
          laptopData.category = Array.isArray(parsed) ? parsed : [laptopData.category];
        } catch (e) {
          laptopData.category = laptopData.category.split(',').map(s => s.trim()).filter(Boolean);
        }
      } else if (!Array.isArray(laptopData.category)) {
        laptopData.category = [laptopData.category];
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
    console.log('Body:', JSON.stringify(req.body, null, 2)); // Log body to see what's being sent
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

    // Handle category parsing
    if (laptopData.category) {
      if (typeof laptopData.category === 'string') {
        try {
          const parsed = JSON.parse(laptopData.category);
          laptopData.category = Array.isArray(parsed) ? parsed : [laptopData.category];
        } catch (e) {
          laptopData.category = laptopData.category.split(',').map(s => s.trim()).filter(Boolean);
        }
      } else if (!Array.isArray(laptopData.category)) {
        laptopData.category = [laptopData.category];
      }
    }

    if (laptopData.price) laptopData.price = Number(laptopData.price);

    // Use findByIdAndUpdate - note that if findById has issues, this might too!
    // But typically findByIdAndUpdate is robust. If it fails, we might need a similar fallback.
    // However, usually we first GET the laptop (which we fixed), edit it, then PUT.
    // If PUT fails, we will know.
    const updatedLaptop = await Laptop.findByIdAndUpdate(
      req.params.id,
      laptopData,
      { new: true }
    );
    if (!updatedLaptop) {
      return res.status(404).json({ message: 'Laptop not found' });
    }
    res.json(updatedLaptop);
  } catch (error) {
    console.error('Error updating laptop:', error);
    res.status(500).json({ message: error.message });
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
