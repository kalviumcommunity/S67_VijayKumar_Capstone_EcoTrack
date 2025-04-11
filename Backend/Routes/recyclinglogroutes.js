 const{ getalllogs, getlogsbyuser } = require( '../Controllers/recyclinglogsControll');

const express = require('express');
const { addrecyclinglogs } = require('../Controllers/recyclinglogsControll');

const recyclinglogsrouter = express.Router();

recyclinglogsrouter.get('/logs', getalllogs);
recyclinglogsrouter.get('/logs/:userId', getlogsbyuser);

recyclinglogsrouter.post('/logs', addrecyclinglogs);

module.exports = recyclinglogsrouter;


