const RecyclingCenter = require('../Models/Recylingcenter');

exports.getAllRecyclingCenters = async (req, res) => {
    try{
        const centers = await RecyclingCenter.find({});
        res.status(200).json(centers);
    }catch(err){
        res.json({message: 'failed to fetch recycling centers'});
    }
}