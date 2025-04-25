const express = require('express');
const {   getalllogs,  getlogsbyuser,  updaterecyclinglog, addrecyclinglogs } = require('../Controllers/recyclinglogsControll');

const recyclinglogsrouter = express.Router();


recyclinglogsrouter.get('/', getalllogs);
recyclinglogsrouter.get('/:userId', getlogsbyuser)
recyclinglogsrouter.post('/', addrecyclinglogs);
recyclinglogsrouter.put('/:id', updaterecyclinglog);

module.exports = recyclinglogsrouter;
