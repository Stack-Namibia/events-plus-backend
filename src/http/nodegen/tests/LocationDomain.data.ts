import * as Joi from 'joi';

export const getLocationsQueryLimit = 63;

export const getLocationsQuerySkip = 62;

export const getLocationsQueryMatch = '2DIZNphC5DHIi9q5UO7WsEYwU6DBQ0igWMpXPkys5FXUo7QJTEU89jh';

export const getLocationsQuerySort = 'FeKTN2AJOrWzzwkVo8TaCxfMgYKj15GrjvyaPmtao52uQjd97GLh6FKr2qk4';

export const addLocationBodyAddLocationPost = {
  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
  name: 'Seattle Coffee',
  address: '123456789',
  city: 'Seattle',
  state: 'WA',
  zip: '98000',
  country: 'USA',
  longitude: '-122.3320708',
  latitude: '47.6062095',
};

export const pathId = 'bf114f56-cbb1-4369-add5-9b17979db26a';

export const updateLocationBodyUpdateLocationPatch = {
  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
  name: 'Seattle Coffee',
  address: '123456789',
  city: 'Seattle',
  state: 'WA',
  zip: '98000',
  country: 'USA',
  longitude: '-122.3320708',
  latitude: '47.6062095',
};

export const validationSchemas: Record<string, Joi.AnySchema> = {
  locationGet200: Joi.object({
    data: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        name: Joi.string().allow('').allow(null),
        address: Joi.string().allow('').allow(null),
        city: Joi.string().allow('').allow(null),
        state: Joi.string().allow('').allow(null),
        zip: Joi.string().allow('').allow(null),
        country: Joi.string().allow('').allow(null),
        longitude: Joi.string().allow('').allow(null),
        latitude: Joi.string().allow('').allow(null),
      }).allow(null)
    ),
    meta: Joi.object({
      total: Joi.number().allow(null),
      lastUpdate: Joi.string().allow('').allow(null),
      skip: Joi.number().allow(null),
      limit: Joi.number().allow(null),
      orderedBy: Joi.string().allow('').allow(null),
    }).allow(null),
  }).allow(null),
  locationGetSuccess: Joi.object({
    data: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        name: Joi.string().allow('').allow(null),
        address: Joi.string().allow('').allow(null),
        city: Joi.string().allow('').allow(null),
        state: Joi.string().allow('').allow(null),
        zip: Joi.string().allow('').allow(null),
        country: Joi.string().allow('').allow(null),
        longitude: Joi.string().allow('').allow(null),
        latitude: Joi.string().allow('').allow(null),
      }).allow(null)
    ),
    meta: Joi.object({
      total: Joi.number().allow(null),
      lastUpdate: Joi.string().allow('').allow(null),
      skip: Joi.number().allow(null),
      limit: Joi.number().allow(null),
      orderedBy: Joi.string().allow('').allow(null),
    }).allow(null),
  }).allow(null),
  locationGet401: Joi.object({}),
  locationGet403: Joi.object({}),
  locationGet404: Joi.object({}),
  locationGet500: Joi.object({}),
  locationPost401: Joi.object({}),
  locationPost403: Joi.object({}),
  locationPost422: Joi.object({}),
  locationPost500: Joi.object({}),
  locationIdGet200: Joi.object({
    _id: Joi.string().allow('').allow(null),
    name: Joi.string().allow('').allow(null),
    address: Joi.string().allow('').allow(null),
    city: Joi.string().allow('').allow(null),
    state: Joi.string().allow('').allow(null),
    zip: Joi.string().allow('').allow(null),
    country: Joi.string().allow('').allow(null),
    longitude: Joi.string().allow('').allow(null),
    latitude: Joi.string().allow('').allow(null),
  }).allow(null),
  locationIdGetSuccess: Joi.object({
    _id: Joi.string().allow('').allow(null),
    name: Joi.string().allow('').allow(null),
    address: Joi.string().allow('').allow(null),
    city: Joi.string().allow('').allow(null),
    state: Joi.string().allow('').allow(null),
    zip: Joi.string().allow('').allow(null),
    country: Joi.string().allow('').allow(null),
    longitude: Joi.string().allow('').allow(null),
    latitude: Joi.string().allow('').allow(null),
  }).allow(null),
  locationIdGet401: Joi.object({}),
  locationIdGet403: Joi.object({}),
  locationIdGet404: Joi.object({}),
  locationIdGet500: Joi.object({}),
  locationIdPatch200: Joi.object({
    _id: Joi.string().allow('').allow(null),
    name: Joi.string().allow('').allow(null),
    address: Joi.string().allow('').allow(null),
    city: Joi.string().allow('').allow(null),
    state: Joi.string().allow('').allow(null),
    zip: Joi.string().allow('').allow(null),
    country: Joi.string().allow('').allow(null),
    longitude: Joi.string().allow('').allow(null),
    latitude: Joi.string().allow('').allow(null),
  }).allow(null),
  locationIdPatchSuccess: Joi.object({
    _id: Joi.string().allow('').allow(null),
    name: Joi.string().allow('').allow(null),
    address: Joi.string().allow('').allow(null),
    city: Joi.string().allow('').allow(null),
    state: Joi.string().allow('').allow(null),
    zip: Joi.string().allow('').allow(null),
    country: Joi.string().allow('').allow(null),
    longitude: Joi.string().allow('').allow(null),
    latitude: Joi.string().allow('').allow(null),
  }).allow(null),
  locationIdPatch401: Joi.object({}),
  locationIdPatch403: Joi.object({}),
  locationIdPatch404: Joi.object({}),
  locationIdPatch422: Joi.object({}),
  locationIdPatch500: Joi.object({}),
};

/**
 * Default, basic validator which checks if the schema returned matches
 * the schema defined in the API spec.
 * This is just a starting point for the tests, but this should be replaced by more specific,
 * targeted test cases.
 *
 * @param {string}  responseKey  The response key
 * @param {any}     schema       The schema
 */
export const responseValidator = (responseKey: string, schema: any): { error?: Joi.ValidationError } => {
  return validationSchemas[responseKey].validate(schema);
};
