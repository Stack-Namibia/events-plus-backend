import { Joi } from 'celebrate';

export default {
  getEvents: {},

  addEvent: {
    body: Joi.object({
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
        Joi.object({
          _id: Joi.string().allow('').allow(null),
          name: Joi.string().allow('').allow(null),
        }).allow(null)
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
          type: Joi.string()
            .allow('')
            .valid('VIP', 'VVIP', 'General')
            .allow(null),
          price: Joi.number().allow(null),
          quantity: Joi.number().integer().allow(null),
        }).allow(null)
      ),
      images: Joi.array().items(Joi.string().allow('').allow(null)),
    }),
  },

  deleteEventById: {
    params: Joi.object({ eventId: Joi.string().required() }),
  },

  getEventById: {
    params: Joi.object({ eventId: Joi.string().required() }),
  },
};
