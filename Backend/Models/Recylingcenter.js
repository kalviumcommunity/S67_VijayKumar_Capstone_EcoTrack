const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  location: {

    type: {
      type: String,
      default: 'Point'
    },

    coordinates: {
      type: [Number],
      required: true
    }
    
  },
  acceptedMaterials: [String],
  contact: {
    phone: String,
    email: String
  }
  
});

centerSchema.index({ location: '2dsphere' });

const RecyclingCenter = mongoose.model('RecyclingCenter', centerSchema);
module. exports = RecyclingCenter;   

