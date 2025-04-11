const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true, 

    }, 
    email:{
        type:String, 
        required:true, 
        unique: true,

    },
    password:{
        type:String,
        required:true,
        minlength:5,

    }, 
    role:{
        type:String,
        enum:['user','admin'],
        default:'user',
    }, 
    joinedAt:{
        type:Date,
        default:Date.now,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;