const express = require('express');
const app = express();

const recyclingcentersrouter = require('./Routes/recyclingcenter')
const userrouter = require('./Routes/userRouter')
const recyclinglogsrouter = require('./Routes/recyclinglogroutes')

app.use(express.json());


app.use('/api/centers',  recyclingcentersrouter);
app.use('/api/users', userrouter);
app.use('/api/logs', recyclinglogsrouter);


app.use('/api/centers',recyclingcentersrouter );
app.use('/api/users', userrouter);
app.use('/api/logs', recyclinglogsrouter);


const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


