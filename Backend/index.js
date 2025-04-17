const express = require('express');
const app = express();
const cors = require('cors');

const recyclingcentersrouter = require('./Routes/recyclingcenter')
const userrouter = require('./Routes/userRouter')
const recyclinglogsrouter = require('./Routes/recyclinglogroutes')

app.use(cors())

app.use(express.json());
require('dotenv').config();
const connectDb = require('./Database/db');
const url = process.env.db_uri;

app.use('/centers',  recyclingcentersrouter);
app.use('/users', userrouter);
app.use('/logs', recyclinglogsrouter);


// app.get('/', (req, res) => {
//   res.send('Server is running fine');
// });


const port = 3000;

app.listen(port, async () => {
  try {
      await connectDb(url);
      console.log(`Server is running on port:${port} Link: http://localhost:${port}`);
  } catch (err) {
      console.log(err);
  }
});


