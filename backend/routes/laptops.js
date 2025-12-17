const express = require('express');
const router = express.Router();
const {
  getAllLaptops,
  getLaptopById,
  createLaptop,
  updateLaptop,
  deleteLaptop
} = require('../controllers/laptopController');

// GET all laptops
router.get('/', getAllLaptops);

// GET single laptop by ID
router.get('/:id', getLaptopById);

// POST create new laptop
router.post('/', createLaptop);

// PUT update laptop
router.put('/:id', updateLaptop);

// DELETE laptop
router.delete('/:id', deleteLaptop);

module.exports = router;
