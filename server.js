const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const fileRoutes = require('./routes/fileRoutes');

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.use('/api/files', fileRoutes);

// if someone uploads pdf, then they will get json response instead of server crash
app.use((err, req, res, next) => {
  res.status(400).json({
    message: err.message,
  });
});

app.get('/', (req, res) => {
  res.send('Welcome to the Image Upload API');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})