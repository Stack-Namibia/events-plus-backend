/**
 * @author Carlos Sibalatani
 * @email sibalatanicsoutlookcom
 * @create date 2022-08-18 21:10:00
 * @modify date 2022-08-18 21:10:00
 * @desc [description]
 */
import { Schema, model } from 'mongoose';

export const HostRawType = {
  _id: { type: String, required: true, alias: 'id' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
};

export interface HostSchemaType {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export const HostSchema = new Schema<HostSchemaType>(HostRawType, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  id: false,
}).set('timestamps', { createdAt: 'entryDate', updatedAt: 'lastModified' });

export const HostModel = model('Host', HostSchema);
