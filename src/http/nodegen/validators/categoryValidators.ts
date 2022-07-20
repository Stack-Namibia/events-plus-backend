import { Joi } from 'celebrate';

export default {
  getCategories: {
    query: Joi.object({
      limit: Joi.number().integer(),
      skip: Joi.number().integer(),
      match: Joi.string().allow(''),
      sort: Joi.string().allow(''),
    }),
  },

  addCategory: {
    body: Joi.object({
      _id: Joi.string().allow('').allow(null),
      name: Joi.string().allow('').allow(null),
    }),
  },

  deleteCategoryById: {
    params: Joi.object({ id: Joi.string().required() }),
  },

  getCategoryById: {
    params: Joi.object({ id: Joi.string().required() }),
  },

  updateCategory: {
    body: Joi.object({
      _id: Joi.string().allow('').allow(null),
      name: Joi.string().allow('').allow(null),
    }),
    params: Joi.object({ id: Joi.string().required() }),
  },
};
