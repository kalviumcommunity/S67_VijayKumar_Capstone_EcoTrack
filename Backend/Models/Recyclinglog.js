const mongoose = require('mongoose');

const recyclinglogschema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
   materialtype:{
    type:String,
    enum : ['plastic', 'paper', 'metal', 'glass', 'electronics','organic', 'other'],
    required: true
   }, 
   quantity:{
    type:Number,
    required:true,
   }, 
   date:{
    type:Date, 
    default:Date.now,
   }, 
    location:{
    type:{
        type:String, 
        default:'Point',
    },
    coordinates:{
        type:[Number],
        required: true
        // index:'2dsphere',
    },
   },
})

recyclinglogschema.index({location:'2dsphere'})
const Recyclinglog = mongoose.model('Recyclinglog', recyclinglogschema);
module.exports = Recyclinglog;