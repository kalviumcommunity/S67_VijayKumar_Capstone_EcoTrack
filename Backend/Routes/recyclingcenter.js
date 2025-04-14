const express = require('express');
const { getAllRecyclingCenters, addcenter, updateRecyclingCenter } = require('../Controllers/recyclingcentercontroller');

const recyclingcentersrouter = express.Router();

recyclingcentersrouter.get('/centers', getAllRecyclingCenters);

recyclingcentersrouter.post('/centers', addcenter)

recyclingcentersrouter.put('/centers/:id', updateRecyclingCenter)
module.exports = recyclingcentersrouter;