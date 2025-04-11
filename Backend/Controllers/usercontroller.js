const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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




exports. registersUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        const existUser = await User.findOne({email});

        if(existUser){
            return res.status(400).json({message: 'User already exists'});
        }

        const hasword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({message: 'User registered successfully', user: newUser});
    }catch(err){
        res.status(500).json({message: 'Failed to register user', err});
    }
}

exports.loginUsers = async(req, res)=>{

    try{
    const {name, email } = req.body;

    const user = await User.findOne({email:email});
    if(!user){
        return res.status(400).json({message: 'Invalid credential'})
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.status({message: 'Login successful', token});
}catch(err){
    return res.status(400).json({message: 'Login failed', err});
}
}