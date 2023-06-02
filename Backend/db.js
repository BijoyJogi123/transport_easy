
// Connect to MongoDB
const mongoose = require('mongoose');
async function connectToMongo() {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
    }
  }
  
  module.exports = connectToMongo;