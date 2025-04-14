const RecyclingCenter = require('../Models/Recylingcenter');

exports.getAllRecyclingCenters = async (req, res) => {
    try{
        const centers = await RecyclingCenter.find({});
        res.status(200).json(centers);
    }catch(err){
        res.json({message: 'failed to fetch recycling centers'});
    }
}

exports.addcenter = async (req, res) => {
    try{
        const {name, location, materialtypes} = req.body;

        const newCenter = new RecyclingCenter({name, location, materialtypes});
        await newCenter.save();
        res.status(201).json({message: 'Recycling center added successfully', newCenter});
    }catch(err){
        console.error(err);
        res.status(500).json({message: 'failed to add recycling center', error: err.message});
    }
}


exports. updateRecyclingCenter = async (req, res) => {
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

