const express = require('express');
const app = express();;

const recyclingcentersrouter = require('./Routes/recyclingcenter')
const userrouter = require('./Routes/userRouter')
const recyclinglogsrouter = require('./Routes/recyclinglogroutes')

app.use(express.json());


app.use('/api/centers',  recyclingcentersrouter);
app.use('/api/users', userrouter);
app.use('/api/logs', recyclinglogsrouter);