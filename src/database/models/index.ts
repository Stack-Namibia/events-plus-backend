/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2022-07-03 10:34:27
 * @modify date 2022-07-03 10:34:27
 * @desc [description]
 */

import ai from 'mongoose-auto-increment';
import mongoose from 'mongoose';
ai.initialize(mongoose.connection);
export * from './event.model';
export * from './user.model';
