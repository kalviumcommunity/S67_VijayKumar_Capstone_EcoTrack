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


exports.addrecyclinglogs = async(req, res)=>{
    try{
        const {user, materialtype,quantity, centerId } = req.body;
        const newlog = new Recyclinglog({user, materialtype, quantity, centerId});
        await newlog.save();
        res.status(201).json({message:"Recycleing log added succeesfully",newlog});
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'failed to add recycling log', error: err.message});
    }
}