const SecondHand = require('../models/SecondHand');

exports.getAllSecondHand = async (req, res) => {
  try {
    const secondhand = await SecondHand.find();
    res.json(secondhand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSecondHandById = async (req, res) => {
  try {
    const secondhand = await SecondHand.findById(req.params.id);
    if (!secondhand) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(secondhand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSecondHand = async (req, res) => {
  const secondhand = new SecondHand(req.body);
  try {
    const newSecondHand = await secondhand.save();
    res.status(201).json(newSecondHand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateSecondHand = async (req, res) => {
  try {
    const secondhand = await SecondHand.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!secondhand) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(secondhand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSecondHand = async (req, res) => {
  try {
    const secondhand = await SecondHand.findByIdAndDelete(req.params.id);
    if (!secondhand) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
