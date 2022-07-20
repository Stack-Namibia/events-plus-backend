import { Joi } from 'celebrate';

export default {
  getTickets: {
    query: Joi.object({
      limit: Joi.number().integer(),
      skip: Joi.number().integer(),
      match: Joi.string().allow(''),
      sort: Joi.string().allow(''),
    }),
  },

  addTicket: {
    body: Joi.object({
      _id: Joi.string().allow('').allow(null),
      type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
      price: Joi.number().allow(null),
      quantity: Joi.number().integer().allow(null),
    }),
  },

  getTicketById: {
    params: Joi.object({ id: Joi.string().required() }),
  },
};
