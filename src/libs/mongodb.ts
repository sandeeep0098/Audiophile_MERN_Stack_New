import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('mongodb connection established');
  } catch (error) {
    console.log(error);
  }
};
export default connectMongoDB;
