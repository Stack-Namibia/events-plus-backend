/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2022-06-30 15:19:15
 * @modify date 2022-06-30 15:19:15
 * @desc [description]
 */
import mongoose from 'mongoose';
import config from '@/config';
import ai from 'mongoose-auto-increment';

export const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(config.mongoUrl);
    ai.initialize(mongoose.connection);
    console.log('connected successfully to events-plus-db!');
    return;
  } catch (error) {
    console.log('connection to the db failed', error);
  }
};

export const disconnect = async (): Promise<void> => {
  return mongoose.disconnect();
};
