const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const uri = process.env.MONGODB_URI;


if (!uri) {
  console.error("MONGODB_URI is not defined in .env file");
  process.exit(1);
}

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });