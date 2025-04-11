const express = require('express');
const { getAllusers, getUserById, registersUser, loginUsers } = require('../Controllers/usercontroller');

const userrouter = express.Router();

userrouter.get('/users', getAllusers);
userrouter.get('/users/:id', getUserById);


userrouter.post('/register', registersUser);
userrouter.post('/login', loginUsers);


module.exports = userrouter;

