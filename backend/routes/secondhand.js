const express = require('express');
const router = express.Router();
const {
  getAllSecondHand,
  getSecondHandById,
  createSecondHand,
  updateSecondHand,
  deleteSecondHand
} = require('../controllers/secondhandController');

router.get('/', getAllSecondHand);
router.get('/:id', getSecondHandById);
router.post('/', createSecondHand);
router.put('/:id', updateSecondHand);
router.delete('/:id', deleteSecondHand);

module.exports = router;
