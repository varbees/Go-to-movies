import mongoose, { Connection } from 'mongoose';
import { __db__ } from './constants';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(__db__);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Database Connection Failed? ${err?.message}`);
    }
  }
};
