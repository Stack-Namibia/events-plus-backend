import * as Joi from 'joi';

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

export const pathLocationId = '02b65e81-28a7-4ad9-9207-57e6e93f0988';

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
  locationGet400: Joi.object({}),
  locationPost405: Joi.object({}),
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
  locationIdGet400: Joi.object({}),
  locationIdGet404: Joi.object({}),
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
  locationIdPatch400: Joi.object({}),
  locationIdPatch404: Joi.object({}),
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
