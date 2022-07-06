export interface EventCategoryResponse {
  data: Datum[];
  meta?: Meta;
}

export interface Datum {
  _id?: string;
  name?: string;
}

export interface Meta {
  lastUpdate?: Date;
  limit?: number;
  orderedBy?: string;
  skip?: number;
  total?: number;
}
