const express = require('express');
const { getAllusers, getUserById } = require('../Controllers/usercontroller');

const userrouter = express.Router();

userrouter.get('/users', getAllusers);
userrouter.get('/users/:id', getUserById)

module.exports = userrouter;