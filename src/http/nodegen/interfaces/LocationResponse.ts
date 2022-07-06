export interface LocationResponse {
  data: Datum[];
  meta?: Meta;
}

export interface Datum {
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

export interface Meta {
  lastUpdate?: Date;
  limit?: number;
  orderedBy?: string;
  skip?: number;
  total?: number;
}
