const express = require('express');
const router = express.Router();
const {
  getAllRepairs,
  getRepairById,
  createRepair,
  updateRepair,
  deleteRepair
} = require('../controllers/repairController');

router.get('/', getAllRepairs);
router.get('/:id', getRepairById);
router.post('/', createRepair);
router.put('/:id', updateRepair);
router.delete('/:id', deleteRepair);

module.exports = router;
