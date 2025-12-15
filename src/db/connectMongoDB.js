import mongoose from 'mongoose';

export const connectMongoDB = async (mongoUrl) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
