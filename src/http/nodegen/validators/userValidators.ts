import { Joi } from 'celebrate';

export default {
  getUsers: {
    query: Joi.object({
      limit: Joi.number().integer(),
      skip: Joi.number().integer(),
      match: Joi.string().allow(''),
      sort: Joi.string().allow(''),
    }),
  },

  createUser: {
    body: Joi.object({
      _id: Joi.string().allow('').allow(null),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      mobile: Joi.string().required(),
      gender: Joi.string().valid('male', 'female', 'other').required(),
      email: Joi.string().required(),
      date_of_birth: Joi.string().required(),
      profilePic: Joi.string().allow('').allow(null),
      firebaseToken: Joi.string().allow('').allow(null),
    }),
  },

  deleteUser: {
    params: Joi.object({ id: Joi.string().required() }),
  },

  getUserById: {
    params: Joi.object({ id: Joi.string().required() }),
  },

  updateUser: {
    body: Joi.object({
      _id: Joi.string().allow('').allow(null),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      mobile: Joi.string().required(),
      gender: Joi.string().valid('male', 'female', 'other').required(),
      email: Joi.string().required(),
      date_of_birth: Joi.string().required(),
      profilePic: Joi.string().allow('').allow(null),
      firebaseToken: Joi.string().allow('').allow(null),
    }),
    params: Joi.object({ id: Joi.string().required() }),
  },
};
