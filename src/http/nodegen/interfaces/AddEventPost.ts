export interface AddEventPost {
  _id?: string;
  attendance?: number;
  category?: Category[];
  /**
   * Events description
   */
  description?: string;
  endTime?: string;
  eventDate?: Date;
  host?: Host[];
  images?: string[];
  location?: Location;
  /**
   * Events name
   */
  name?: string;
  tickets?: Ticket[];
}

export interface Category {
  _id?: string;
  name?: string;
}

export interface Host {
  _id?: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
}

export interface Location {
  _id?: string;
  address?: string;
  city?: string;
  country?: string;
  latitude?: string;
  longitude?: string;
  name?: string;
  state?: string;
  zip?: string;
}

export interface Ticket {
  _id?: number;
  price?: number;
  quantity?: number;
  type?: Type;
}

export enum Type {
  General = 'General',
  Vip = 'VIP',
}
