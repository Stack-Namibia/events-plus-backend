import { Joi } from 'celebrate';

export default {
  registerUser: {
    body: Joi.object({
      user: Joi.object({
        first_name: Joi.string().allow('').allow(null),
        last_name: Joi.string().allow('').allow(null),
        mobile: Joi.string().allow('').allow(null),
        gender: Joi.string()
          .allow('')
          .valid('male', 'female', 'other')
          .allow(null),
        email: Joi.string().allow('').allow(null),
        date_of_birth: Joi.string().allow('').allow(null),
        profilePic: Joi.string().allow('').allow(null),
      }).required(),
    }),
  },
};
