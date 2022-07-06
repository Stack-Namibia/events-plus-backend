import { Joi } from 'celebrate';

export default {
  getCategories: {},

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
