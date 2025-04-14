 const{ getalllogs, getlogsbyuser, updaterecyclinglog } = require( '../Controllers/recyclinglogsControll');

const express = require('express');
const { addrecyclinglogs } = require('../Controllers/recyclinglogsControll');

const recyclinglogsrouter = express.Router();

recyclinglogsrouter.get('/logs', getalllogs);
recyclinglogsrouter.get('/logs/:userId', getlogsbyuser);

recyclinglogsrouter.post('/logs', addrecyclinglogs);

recyclinglogsrouter.put('/logs/:id', updaterecyclinglog)

module.exports = recyclinglogsrouter;


