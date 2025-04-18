const Recyclinglog = require('../Models/Recyclinglog');

exports.getalllogs = async (req, res) => {
  try {
    const logs = await Recyclinglog.find({});
    res.json(logs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching logs' });
  }
};

exports.getlogsbyuser = async (req, res) => {
  try {
    const logs = await Recyclinglog.find({ user: req.params.userId });
    res.json(logs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching logs' });
  }
};

exports.addrecyclinglogs = async (req, res) => {
  try {
    const { user, materialtype, quantity, centerId, location } = req.body;

    if (!user || !materialtype || !quantity || !location || !location.coordinates) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newlog = new Recyclinglog({
      user,
      materialtype,
      quantity,
      location,
      centerId
    });

    await newlog.save();
    res.status(201).json({ message: "Recycling log added successfully", newlog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add recycling log', error: err.message });
  }
};

exports.updaterecyclinglog = async (req, res) => {
  try {
    const { id } = req.params;
    const updatelog = await Recyclinglog.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatelog) {
      return res.status(404).json({ message: 'Recycling log not found' });
    }
    res.status(200).json({ message: 'Recycling log updated successfully', updatelog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update recycling log', error: err.message });
  }
};
