import * as Joi from 'joi';

export const getTicketsQueryLimit = 77;

export const getTicketsQuerySkip = 7;

export const getTicketsQueryMatch = 'aOn7butMUmzdpFilljD5kJPXSQLuPSxWRHaCNn63shfjmooKOz4oOugYzCsNlLFZ1vpEfH';

export const getTicketsQuerySort = 'mDQ01OFCa2kiPQkdz5AgllH5WiHBns9giHB8cy3wtazzK3mNr';

export const addTicketBodyAddTicketPost = {
  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
  type: 'General Admission',
  price: 150,
  quantity: 100,
};

export const pathId = '6e210bfd-4673-493d-aa23-68305a718710';

export const validationSchemas: Record<string, Joi.AnySchema> = {
  ticketGet200: Joi.object({
    data: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
        price: Joi.number().allow(null),
        quantity: Joi.number().integer().allow(null),
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
  ticketGetSuccess: Joi.object({
    data: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
        price: Joi.number().allow(null),
        quantity: Joi.number().integer().allow(null),
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
  ticketGet401: Joi.object({}),
  ticketGet403: Joi.object({}),
  ticketGet404: Joi.object({}),
  ticketGet500: Joi.object({}),
  ticketPost200: Joi.object({
    _id: Joi.string().allow('').allow(null),
    type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
    price: Joi.number().allow(null),
    quantity: Joi.number().integer().allow(null),
  }).allow(null),
  ticketPostSuccess: Joi.object({
    _id: Joi.string().allow('').allow(null),
    type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
    price: Joi.number().allow(null),
    quantity: Joi.number().integer().allow(null),
  }).allow(null),
  ticketPost401: Joi.object({}),
  ticketPost403: Joi.object({}),
  ticketPost422: Joi.object({}),
  ticketPost500: Joi.object({}),
  ticketIdGet200: Joi.object({
    data: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
        price: Joi.number().allow(null),
        quantity: Joi.number().integer().allow(null),
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
  ticketIdGetSuccess: Joi.object({
    data: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
        price: Joi.number().allow(null),
        quantity: Joi.number().integer().allow(null),
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
  ticketIdGet401: Joi.object({}),
  ticketIdGet403: Joi.object({}),
  ticketIdGet404: Joi.object({}),
  ticketIdGet500: Joi.object({}),
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
