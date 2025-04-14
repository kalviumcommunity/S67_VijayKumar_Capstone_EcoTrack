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

exports. updaterecyclinglog = async(req, res)=>{
    try{
        const {id} = req.params;
        const updatelog = await Recyclinglog.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatelog){
            return res.status(404).json({message:'Recycling log not found'});
        }
        res.status(200).json({message:'Recycling log updated successfully', updatelog});

    }catch(err){
        console.error(err);
        return res.status(500).json({message:'Failed to update recycling log', error: err.message});
    }
}