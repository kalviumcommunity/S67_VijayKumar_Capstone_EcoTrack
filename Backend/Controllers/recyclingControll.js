const Recyclinglog = require('../Models/Recyclinglog');

exports.getalllogs = async (req, res)=>{
    try{
        const logs = await Recyclinglog.find({})
        res.json(logs);
    }catch(err){
        console.error(err);
        res.status(500).json({message:'Error fetching logs'});
    }
}
exports.getlogsbyuser = async(req, res)=>{
    try{
        const logs = await Recyclinglog.find({userId: req.params.userId})
        res.json(logs);
    }catch(err){
        res.status(500).json({message:'Error fetching logs'})
    }
};
