import * as Joi from 'joi';

export const getEventsQueryLimit = 59;

export const getEventsQuerySkip = 9;

export const getEventsQueryMatch = 'CG3WMJB6EUUvHgJCy2BG8nS1TARU8Wl1Mvnx1NQBWGGP317sQCysGHDK1i04N6lyOSTESF6mFgcAvStc';

export const getEventsQuerySort =
  'BWUITfHxe7rBJNPPUNnNNZYI7ZQUr8dEAIPp3ncYDvNqlrEYhR5q0fastENK6ykOpbn4VhGcxkyWXLsPGk8Rwo1vli2Q6m';

export const addEventBodyAddEventPost = {
  _id: '6e210bfd-4673-493d-aa23-68305a718710',
  name: 'Coffee concert',
  description: 'Coffee concert',
  host: [
    {
      _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
      name: 'Seattle Coffee',
      email: 'host@gmail.com',
      phone_no: '123456789',
    },
  ],
  category: [
    { _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f', name: 'Concert' },
    { _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f', name: 'Coffee meetup' },
  ],
  event_datetime: '2020-01-01T00:00:00.000Z',
  end_time: '2020-01-01T00:00:00.000Z',
  location: {
    _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
    name: 'Seattle Coffee',
    address: '123456789',
    city: 'Seattle',
    state: 'WA',
    zip: '98000',
    country: 'USA',
    longitude: '-122.3320708',
    latitude: '47.6062095',
  },
  attendance: 150,
  tickets: [
    { _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f', type: 'General Admission', price: '150.00', quantity: 100 },
    { _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f', type: 'VIP', price: '200.00', quantity: 50 },
  ],
  images: [
    {
      url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
  ],
};

export const pathEventId = '6e210bfd-4673-493d-aa23-68305a718710';

export const validationSchemas: Record<string, Joi.AnySchema> = {
  eventGet200: Joi.object({
    data: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        name: Joi.string().allow('').allow(null),
        description: Joi.string().allow('').allow(null),
        host: Joi.array().items(
          Joi.object({
            _id: Joi.string().allow('').allow(null),
            name: Joi.string().allow('').allow(null),
            email: Joi.string().allow('').allow(null),
            phoneNumber: Joi.string().allow('').allow(null),
          }).allow(null)
        ),
        category: Joi.array().items(
          Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
        ),
        eventDate: Joi.string().allow('').allow(null),
        endTime: Joi.string().allow('').allow(null),
        location: Joi.object({
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
        attendance: Joi.number().integer().allow(null),
        tickets: Joi.array().items(
          Joi.object({
            _id: Joi.string().allow('').allow(null),
            type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
            price: Joi.number().allow(null),
            quantity: Joi.number().integer().allow(null),
          }).allow(null)
        ),
        images: Joi.array().items(Joi.string().allow('').allow(null)),
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
  eventGetSuccess: Joi.object({
    data: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        name: Joi.string().allow('').allow(null),
        description: Joi.string().allow('').allow(null),
        host: Joi.array().items(
          Joi.object({
            _id: Joi.string().allow('').allow(null),
            name: Joi.string().allow('').allow(null),
            email: Joi.string().allow('').allow(null),
            phoneNumber: Joi.string().allow('').allow(null),
          }).allow(null)
        ),
        category: Joi.array().items(
          Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
        ),
        eventDate: Joi.string().allow('').allow(null),
        endTime: Joi.string().allow('').allow(null),
        location: Joi.object({
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
        attendance: Joi.number().integer().allow(null),
        tickets: Joi.array().items(
          Joi.object({
            _id: Joi.string().allow('').allow(null),
            type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
            price: Joi.number().allow(null),
            quantity: Joi.number().integer().allow(null),
          }).allow(null)
        ),
        images: Joi.array().items(Joi.string().allow('').allow(null)),
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
  eventGet404: Joi.object({}),
  eventGet500: Joi.object({}),
  eventPost401: Joi.object({}),
  eventPost403: Joi.object({}),
  eventPost422: Joi.object({}),
  eventPost500: Joi.object({}),
  eventEventIdDelete201: Joi.object({}),
  eventEventIdDeleteSuccess: Joi.object({}),
  eventEventIdDelete400: Joi.object({}),
  eventEventIdDelete401: Joi.object({}),
  eventEventIdDelete403: Joi.object({}),
  eventEventIdDelete404: Joi.object({}),
  eventEventIdGet200: Joi.object({
    _id: Joi.string().allow('').allow(null),
    name: Joi.string().allow('').allow(null),
    description: Joi.string().allow('').allow(null),
    host: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        name: Joi.string().allow('').allow(null),
        email: Joi.string().allow('').allow(null),
        phoneNumber: Joi.string().allow('').allow(null),
      }).allow(null)
    ),
    category: Joi.array().items(
      Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
    ),
    eventDate: Joi.string().allow('').allow(null),
    endTime: Joi.string().allow('').allow(null),
    location: Joi.object({
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
    attendance: Joi.number().integer().allow(null),
    tickets: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
        price: Joi.number().allow(null),
        quantity: Joi.number().integer().allow(null),
      }).allow(null)
    ),
    images: Joi.array().items(Joi.string().allow('').allow(null)),
  }).allow(null),
  eventEventIdGetSuccess: Joi.object({
    _id: Joi.string().allow('').allow(null),
    name: Joi.string().allow('').allow(null),
    description: Joi.string().allow('').allow(null),
    host: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        name: Joi.string().allow('').allow(null),
        email: Joi.string().allow('').allow(null),
        phoneNumber: Joi.string().allow('').allow(null),
      }).allow(null)
    ),
    category: Joi.array().items(
      Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
    ),
    eventDate: Joi.string().allow('').allow(null),
    endTime: Joi.string().allow('').allow(null),
    location: Joi.object({
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
    attendance: Joi.number().integer().allow(null),
    tickets: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
        price: Joi.number().allow(null),
        quantity: Joi.number().integer().allow(null),
      }).allow(null)
    ),
    images: Joi.array().items(Joi.string().allow('').allow(null)),
  }).allow(null),
  eventEventIdGet404: Joi.object({}),
  eventEventIdGet500: Joi.object({}),
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
