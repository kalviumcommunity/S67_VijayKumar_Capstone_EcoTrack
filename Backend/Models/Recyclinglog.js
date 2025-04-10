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
   quantitykg:{
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
        // index:'2dsphere',
    },
   },
})

recyclinglogschema.index({location:'2dsphere'})
const Recyclinglog = mongoose.model('Recyclinglog', recyclinglogschema);
module.exports = Recyclinglog;