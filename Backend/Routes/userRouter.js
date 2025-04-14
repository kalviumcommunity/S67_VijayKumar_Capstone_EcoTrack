const express = require('express');
const { getAllusers, getUserById, registersUser, loginUsers, updateUser } = require('../Controllers/usercontroller');

const userrouter = express.Router();

userrouter.get('/users', getAllusers);
userrouter.get('/users/:id', getUserById);


userrouter.post('/register', registersUser);
userrouter.post('/login', loginUsers);

userrouter.put('/users/:id', updateUser)


module.exports = userrouter;

