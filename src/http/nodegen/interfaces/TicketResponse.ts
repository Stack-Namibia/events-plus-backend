export interface TicketResponse {
  data: Datum[];
  meta?: Meta;
}

export interface Datum {
  _id?: string;
  price?: number;
  quantity?: number;
  type?: Type;
}

export enum Type {
  General = 'General',
  Vip = 'VIP',
  Vvip = 'VVIP',
}

export interface Meta {
  lastUpdate?: Date;
  limit?: number;
  orderedBy?: string;
  skip?: number;
  total?: number;
}
