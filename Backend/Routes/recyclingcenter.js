const express = require('express');
const { getAllRecyclingCenters } = require('../Controllers/recyclingcentercontroller');

const recyclingcentersrouter = express.Router();

recyclingcentersrouter.get('/centers', getAllRecyclingCenters);

module.exports = recyclingcentersrouter;