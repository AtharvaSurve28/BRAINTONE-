const Repair = require('../models/Repair');

exports.getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.find();
    res.json(repairs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRepairById = async (req, res) => {
  try {
    const repair = await Repair.findById(req.params.id);
    if (!repair) {
      return res.status(404).json({ message: 'Repair service not found' });
    }
    res.json(repair);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRepair = async (req, res) => {
  const repair = new Repair(req.body);
  try {
    const newRepair = await repair.save();
    res.status(201).json(newRepair);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateRepair = async (req, res) => {
  try {
    const repair = await Repair.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!repair) {
      return res.status(404).json({ message: 'Repair service not found' });
    }
    res.json(repair);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteRepair = async (req, res) => {
  try {
    const repair = await Repair.findByIdAndDelete(req.params.id);
    if (!repair) {
      return res.status(404).json({ message: 'Repair service not found' });
    }
    res.json({ message: 'Repair service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
