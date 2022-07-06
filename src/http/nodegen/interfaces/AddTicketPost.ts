export interface AddTicketPost {
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
