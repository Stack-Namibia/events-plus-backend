/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2022-07-02 19:03:46
 * @modify date 2022-07-02 19:03:46
 * @desc [description]
 */
import { Schema, model } from 'mongoose';

//import ai from 'mongoose-auto-increment';

export const EventRawType = {
  _id: { type: String, required: true, alias: 'id' },
  name: { type: String, required: true },
  description: { type: String, required: true },
  host: { type: Array, required: false },
  category: { type: Array, required: false },
  eventDate: { type: String, required: false },
  endTime: { type: String, required: false },
  location: { type: Array, required: false },
  attendance: { type: Number, required: false },
  tickets: { type: Array, required: false },
  images: { type: String, required: false },
};

export interface EventSchemaType {
  _id: string;
  name: string;
  description: string;
  host: any;
  category: any;
  eventDate: string;
  endTime: string;
  location: any;
  attendance: number;
  tickets: any;
  images: string;
  readonly id: string;
  readonly entryDate: Date;
  readonly lastModified: Date;
}

export const EventSchema = new Schema<EventSchemaType>(EventRawType, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  id: false,
}).set('timestamps', { createdAt: 'entryDate', updatedAt: 'lastModified' });

export const EventModel = model('Event', EventSchema);
