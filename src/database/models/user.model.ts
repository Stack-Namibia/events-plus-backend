/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2022-07-20 20:46:10
 * @modify date 2022-07-20 20:46:10
 * @desc [description]
 */

import { Gender } from '@/http/nodegen/interfaces/AuthorizeUserModel';
import { Schema, model } from 'mongoose';
import { UserGender } from '@/http/nodegen/interfaces';

const UserRawType = {
  _id: { type: String, required: true, alias: 'id' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  gender: { type: String, required: true, enum: [Gender.Male, Gender.Female, Gender.Other] },
  email: { type: String, required: true },
  date_of_birth: { type: Date, required: true, alias: 'dob' },
  profilePic: { type: String },
  firebaseToken: { type: String },
};

export interface UserSchemaType {
  _id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  gender: UserGender;
  email: string;
  date_of_birth: Date;
  profilePic: string;
  firebaseToken: string;
  readonly id: string;
}

export const UserSchema = new Schema<UserSchemaType>(UserRawType, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
}).set('timestamps', { createdAt: 'date', updatedAt: 'lastModified' });

export const UserModel = model('User', UserSchema);
export type UserInstance = InstanceType<typeof UserModel>;
