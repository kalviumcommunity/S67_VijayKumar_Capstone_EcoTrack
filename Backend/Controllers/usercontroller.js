const User = require('../Models/User');


exports.getAllusers  = async(req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
   
}

exports.getUserById = async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message:'Unable to finc the user'});
        }
        res.json(user);

    }catch(err){
        res.status(500).json({message:'Failed to fetch the user'});
    }
}