import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // Make sure to load the .env file

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(`MongoDB connection error: ${error.message}`);
  }
};

export default connectToDatabase;
