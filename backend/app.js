const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

// Replace with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://23MCA20027:Abinash%40123@cluster0.txeq76n.mongodb.net/';


mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const employeeRoutes = require('./routes/employees');
app.use('/employees', employeeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
