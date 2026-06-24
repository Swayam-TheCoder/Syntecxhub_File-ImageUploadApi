const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const fileRoutes = require('./routes/fileRoutes');

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.use('/api/files', fileRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Image Upload API');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})