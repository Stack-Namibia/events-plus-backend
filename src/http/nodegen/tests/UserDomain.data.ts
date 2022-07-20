import * as Joi from 'joi';

export const getUsersQueryLimit = 44;

export const getUsersQuerySkip = 48;

export const getUsersQueryMatch = 'qBYYBEaYkFRn2ApX';

export const getUsersQuerySort = 'MhEmoeIRH99eWaXw3YpzFp8R5';

export const createUserBodyCreateUserPost = {
  first_name: 'Kathryn',
  last_name: 'Bennett',
  mobile: 264816639110,
  gender: 'male',
  email: 'example@gmail.com',
  date_of_birth: '1962-01-01',
};

export const pathId = '6e210bfd-4673-493d-aa23-68305a718710';

export const updateUserBodyUpdateUserPatch = {
  first_name: 'Kathryn',
  last_name: 'Bennett',
  mobile: 264816639110,
  gender: 'male',
  email: 'example@gmail.com',
  date_of_birth: '1962-01-01',
};

export const validationSchemas: Record<string, Joi.AnySchema> = {
  userGet200: Joi.object({
    data: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        first_name: Joi.string().allow('').allow(null),
        last_name: Joi.string().allow('').allow(null),
        mobile: Joi.string().allow('').allow(null),
        gender: Joi.string().allow('').valid('male', 'female', 'other').allow(null),
        email: Joi.string().allow('').allow(null),
        date_of_birth: Joi.string().allow('').allow(null),
        profilePic: Joi.string().allow('').allow(null),
        firebaseToken: Joi.string().allow('').allow(null),
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
  userGetSuccess: Joi.object({
    data: Joi.array().items(
      Joi.object({
        _id: Joi.string().allow('').allow(null),
        first_name: Joi.string().allow('').allow(null),
        last_name: Joi.string().allow('').allow(null),
        mobile: Joi.string().allow('').allow(null),
        gender: Joi.string().allow('').valid('male', 'female', 'other').allow(null),
        email: Joi.string().allow('').allow(null),
        date_of_birth: Joi.string().allow('').allow(null),
        profilePic: Joi.string().allow('').allow(null),
        firebaseToken: Joi.string().allow('').allow(null),
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
  userGet401: Joi.object({}),
  userGet403: Joi.object({}),
  userGet404: Joi.object({}),
  userGet500: Joi.object({}),
  userPost200: Joi.object({}),
  userPostSuccess: Joi.object({}),
  userPost401: Joi.object({}),
  userPost403: Joi.object({}),
  userPost422: Joi.object({}),
  userPost500: Joi.object({}),
  userIdDelete201: Joi.object({}),
  userIdDeleteSuccess: Joi.object({}),
  userIdDelete401: Joi.object({}),
  userIdDelete403: Joi.object({}),
  userIdDelete404: Joi.object({}),
  userIdDelete500: Joi.object({}),
  userIdGet200: Joi.object({
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
  userIdGetSuccess: Joi.object({
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
  userIdGet401: Joi.object({}),
  userIdGet403: Joi.object({}),
  userIdGet404: Joi.object({}),
  userIdGet500: Joi.object({}),
  userIdPatch200: Joi.object({
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
  userIdPatchSuccess: Joi.object({
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
  userIdPatch401: Joi.object({}),
  userIdPatch403: Joi.object({}),
  userIdPatch404: Joi.object({}),
  userIdPatch422: Joi.object({}),
  userIdPatch500: Joi.object({}),
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
