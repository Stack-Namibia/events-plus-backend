import { Schema, model } from 'mongoose';

export const LocationRawType = {
  _id: { type: String, required: true, alias: 'id' },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  longitude: { type: String, required: true },
  latitude: { type: String, required: true },
};

export interface LocationSchemaType {
  _id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  longitude: string;
  latitude: string;
}

export const LocationSchema = new Schema<LocationSchemaType>(LocationRawType, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  id: false,
}).set('timestamps', { createdAt: 'entryDate', updatedAt: 'lastModified' });

export const LocationModel = model('Location', LocationSchema);
