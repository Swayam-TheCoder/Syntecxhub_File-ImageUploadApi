const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
connectDB();
app.use(express.json());


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})