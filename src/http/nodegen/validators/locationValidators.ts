import { Joi } from 'celebrate';

export default {
  getLocations: {},

  addLocation: {
    body: Joi.object({
      _id: Joi.string().allow('').allow(null),
      name: Joi.string().allow('').allow(null),
      address: Joi.string().allow('').allow(null),
      city: Joi.string().allow('').allow(null),
      state: Joi.string().allow('').allow(null),
      zip: Joi.string().allow('').allow(null),
      country: Joi.string().allow('').allow(null),
      longitude: Joi.string().allow('').allow(null),
      latitude: Joi.string().allow('').allow(null),
    }),
  },

  getLocationById: {
    params: Joi.object({ id: Joi.string().required() }),
  },

  updateLocation: {
    body: Joi.object({
      _id: Joi.string().allow('').allow(null),
      name: Joi.string().allow('').allow(null),
      address: Joi.string().allow('').allow(null),
      city: Joi.string().allow('').allow(null),
      state: Joi.string().allow('').allow(null),
      zip: Joi.string().allow('').allow(null),
      country: Joi.string().allow('').allow(null),
      longitude: Joi.string().allow('').allow(null),
      latitude: Joi.string().allow('').allow(null),
    }),
    params: Joi.object({ id: Joi.string().required() }),
  },
};
