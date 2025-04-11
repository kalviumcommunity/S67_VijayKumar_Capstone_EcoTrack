const express = require('express');
const { getAllRecyclingCenters, addcenter } = require('../Controllers/recyclingcentercontroller');

const recyclingcentersrouter = express.Router();

recyclingcentersrouter.get('/centers', getAllRecyclingCenters);

recyclingcentersrouter.post('/centers', addcenter)

module.exports = recyclingcentersrouter;