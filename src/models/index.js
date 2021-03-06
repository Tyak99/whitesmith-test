import mongoose from 'mongoose';
import config from '../config';

const mongodbConnection = async () => {
  try {
    await mongoose.connect(config.mongoose.url, config.mongoose.options);
    console.log('db connected');
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 9 ~ mongodbConnection ~ error', error);
  }
};

export { default as Agent } from './agent.model';
export { default as User } from './user.model';
export { default as Booking } from './booking.model';

export default mongodbConnection;
