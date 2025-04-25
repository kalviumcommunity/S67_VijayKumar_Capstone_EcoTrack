

const RecyclingCenter = require('../Models/Recylingcenter');

exports.getAllRecyclingCenters = async (req, res) => {
  try {
    const centers = await RecyclingCenter.find().select('name location acceptedMaterials');
    res.status(200).json(centers);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch recycling centers', error: err.message });
  }
};

exports.addcenter = async (req, res) => {
  try {
    const { name, location, acceptedMaterials } = req.body;
    const newCenter = new RecyclingCenter({ name, location, acceptedMaterials });
    await newCenter.save();
    res.status(201).json({ message: 'Recycling center added successfully', newCenter });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add recycling center', error: err.message });
  }
};

exports.updateRecyclingCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCenter = await RecyclingCenter.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCenter) {
      return res.status(404).json({ message: 'Recycling Center not found' });
    }
    res.json(updatedCenter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
