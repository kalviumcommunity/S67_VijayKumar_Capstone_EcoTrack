const express = require('express');
const { getAllusers, getUserById, registersUser, loginUsers, updateUser } = require('../Controllers/usercontroller');

const userrouter = express.Router();

userrouter.get('/', getAllusers);
userrouter.get('/:id', getUserById);


userrouter.post('/register', registersUser);
userrouter.post('/login', loginUsers);

userrouter.put('/:id', updateUser);


module.exports = userrouter;

