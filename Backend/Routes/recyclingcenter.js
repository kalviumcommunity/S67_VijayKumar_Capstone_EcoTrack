const express = require('express');
const { getAllRecyclingCenters, addcenter, updateRecyclingCenter } = require('../Controllers/recyclingcentercontroller');

const recyclingcentersrouter = express.Router();

recyclingcentersrouter.get('/', getAllRecyclingCenters);

recyclingcentersrouter.post('/', addcenter);

recyclingcentersrouter.put('/:id', updateRecyclingCenter);
module.exports = recyclingcentersrouter;