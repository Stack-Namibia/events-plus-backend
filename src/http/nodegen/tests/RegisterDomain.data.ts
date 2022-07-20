import * as Joi from 'joi';

export const registerUserBodyRegisterUserPost = {
  user: {
    first_name: 'Kathryn',
    last_name: 'Bennett',
    mobile: 264816639110,
    gender: 'male',
    email: 'example@gmail.com',
    date_of_birth: '1962-01-01',
  },
};

export const validationSchemas: Record<string, Joi.AnySchema> = {
  registerUserPost200: Joi.object({
    token: Joi.string().allow('').allow(null),
    user: Joi.object({
      _id: Joi.string().allow('').allow(null),
      first_name: Joi.string().allow('').allow(null),
      last_name: Joi.string().allow('').allow(null),
      mobile: Joi.string().allow('').allow(null),
      gender: Joi.string().allow('').valid('male', 'female', 'other').allow(null),
      email: Joi.string().allow('').allow(null),
      date_of_birth: Joi.string().allow('').allow(null),
      profilePic: Joi.string().allow('').allow(null),
      firebaseToken: Joi.string().allow('').allow(null),
    }).allow(null),
  }).allow(null),
  registerUserPostSuccess: Joi.object({
    token: Joi.string().allow('').allow(null),
    user: Joi.object({
      _id: Joi.string().allow('').allow(null),
      first_name: Joi.string().allow('').allow(null),
      last_name: Joi.string().allow('').allow(null),
      mobile: Joi.string().allow('').allow(null),
      gender: Joi.string().allow('').valid('male', 'female', 'other').allow(null),
      email: Joi.string().allow('').allow(null),
      date_of_birth: Joi.string().allow('').allow(null),
      profilePic: Joi.string().allow('').allow(null),
      firebaseToken: Joi.string().allow('').allow(null),
    }).allow(null),
  }).allow(null),
  registerUserPost401: Joi.object({}),
  registerUserPost422: Joi.object({}),
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
