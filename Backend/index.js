const express = require('express');
const app = express();

const recyclingcentersrouter = require('./Routes/recyclingcenter')
const userrouter = require('./Routes/userRouter')
const recyclinglogsrouter = require('./Routes/recyclinglogroutes')

app.use(express.json());
require('dotenv').config();;
const connectDb = require('../Backend/Database/db');
const url = process.env.db_uri;

app.use('/api/centers',  recyclingcentersrouter);
app.use('/api/users', userrouter);
app.use('/api/logs', recyclinglogsrouter);


app.use('/api/centers',recyclingcentersrouter );
app.use('/api/users', userrouter);
app.use('/api/logs', recyclinglogsrouter);


const port = 3000;

app.listen(port, async () => {
  try {
      await connectDb(url);
      console.log(`Server is running on port:${port} Link: http://localhost:${port}`);
  } catch (err) {
      console.log(err);
  }
});


