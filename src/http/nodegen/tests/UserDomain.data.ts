import * as Joi from 'joi';

export const pathUserId = '6e210bfd-4673-493d-aa23-68305a718710';

export const updateUserBodyUpdateUserPatch = {
  _id: '6e210bfd-4673-493d-aa23-68305a718710',
  first_name: 'Kathryn',
  last_name: 'Bennett',
  date_of_birth: '1962-01-01',
  email: 'example@gmail.com',
  password: 'password',
  created_at: '2020-01-01T00:00:00.000Z',
  updated_at: '2020-01-01T00:00:00.000Z',
  auth_token: 'adsjfdsoahdsfoiuahrnlvihbsaouybvclkhsabdcuyvcgqsoflurbgourygrwbekuiybvfkjhbkueyg',
  favorites: [{ _id: '5e210bfd-4673-493d-aa23-68305a718710' }],
};

export const createUserBodyCreateUserPost = {
  _id: '6e210bfd-4673-493d-aa23-68305a718710',
  first_name: 'Kathryn',
  last_name: 'Bennett',
  date_of_birth: '1962-01-01',
  email: 'example@gmail.com',
  password: 'password',
  created_at: '2020-01-01T00:00:00.000Z',
  updated_at: '2020-01-01T00:00:00.000Z',
  auth_token: 'adsjfdsoahdsfoiuahrnlvihbsaouybvclkhsabdcuyvcgqsoflurbgourygrwbekuiybvfkjhbkueyg',
  favorites: [{ _id: '5e210bfd-4673-493d-aa23-68305a718710' }],
};

export const loginQueryUsername = 'hherobiam@gmail.com';

export const loginQueryPassword = 'stack@123';

export const validationSchemas: Record<string, Joi.AnySchema> = {
  userDelete400: Joi.object({}),
  userDelete404: Joi.object({}),
  userGet200: Joi.object({
    _id: Joi.string().allow('').allow(null),
    first_name: Joi.string().allow('').allow(null),
    last_name: Joi.string().allow('').allow(null),
    email: Joi.string().allow('').allow(null),
    date_of_birth: Joi.string().allow('').allow(null),
    password: Joi.string().allow('').allow(null),
    auth_token: Joi.string().allow('').allow(null),
    favorites: Joi.object({
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
        Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
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
          type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
          price: Joi.number().allow(null),
          quantity: Joi.number().integer().allow(null),
        }).allow(null)
      ),
      images: Joi.array().items(Joi.string().allow('').allow(null)),
    }).allow(null),
  }).allow(null),
  userGetSuccess: Joi.object({
    _id: Joi.string().allow('').allow(null),
    first_name: Joi.string().allow('').allow(null),
    last_name: Joi.string().allow('').allow(null),
    email: Joi.string().allow('').allow(null),
    date_of_birth: Joi.string().allow('').allow(null),
    password: Joi.string().allow('').allow(null),
    auth_token: Joi.string().allow('').allow(null),
    favorites: Joi.object({
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
        Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
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
          type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
          price: Joi.number().allow(null),
          quantity: Joi.number().integer().allow(null),
        }).allow(null)
      ),
      images: Joi.array().items(Joi.string().allow('').allow(null)),
    }).allow(null),
  }).allow(null),
  userGet400: Joi.object({}),
  userPatch200: Joi.object({
    _id: Joi.string().allow('').allow(null),
    first_name: Joi.string().allow('').allow(null),
    last_name: Joi.string().allow('').allow(null),
    email: Joi.string().allow('').allow(null),
    date_of_birth: Joi.string().allow('').allow(null),
    password: Joi.string().allow('').allow(null),
    auth_token: Joi.string().allow('').allow(null),
    favorites: Joi.object({
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
        Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
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
          type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
          price: Joi.number().allow(null),
          quantity: Joi.number().integer().allow(null),
        }).allow(null)
      ),
      images: Joi.array().items(Joi.string().allow('').allow(null)),
    }).allow(null),
  }).allow(null),
  userPatchSuccess: Joi.object({
    _id: Joi.string().allow('').allow(null),
    first_name: Joi.string().allow('').allow(null),
    last_name: Joi.string().allow('').allow(null),
    email: Joi.string().allow('').allow(null),
    date_of_birth: Joi.string().allow('').allow(null),
    password: Joi.string().allow('').allow(null),
    auth_token: Joi.string().allow('').allow(null),
    favorites: Joi.object({
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
        Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
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
          type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
          price: Joi.number().allow(null),
          quantity: Joi.number().integer().allow(null),
        }).allow(null)
      ),
      images: Joi.array().items(Joi.string().allow('').allow(null)),
    }).allow(null),
  }).allow(null),
  userPatch400: Joi.object({}),
  userPatch404: Joi.object({}),
  userPost405: Joi.object({}),
  userLoginGet200: Joi.object({}),
  userLoginGetSuccess: Joi.object({}),
  userLoginGet400: Joi.object({}),
  userLogoutGetdefault: Joi.object({}),
  userIdGet200: Joi.object({
    _id: Joi.string().allow('').allow(null),
    first_name: Joi.string().allow('').allow(null),
    last_name: Joi.string().allow('').allow(null),
    email: Joi.string().allow('').allow(null),
    date_of_birth: Joi.string().allow('').allow(null),
    password: Joi.string().allow('').allow(null),
    auth_token: Joi.string().allow('').allow(null),
    favorites: Joi.object({
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
        Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
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
          type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
          price: Joi.number().allow(null),
          quantity: Joi.number().integer().allow(null),
        }).allow(null)
      ),
      images: Joi.array().items(Joi.string().allow('').allow(null)),
    }).allow(null),
  }).allow(null),
  userIdGetSuccess: Joi.object({
    _id: Joi.string().allow('').allow(null),
    first_name: Joi.string().allow('').allow(null),
    last_name: Joi.string().allow('').allow(null),
    email: Joi.string().allow('').allow(null),
    date_of_birth: Joi.string().allow('').allow(null),
    password: Joi.string().allow('').allow(null),
    auth_token: Joi.string().allow('').allow(null),
    favorites: Joi.object({
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
        Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
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
          type: Joi.string().allow('').valid('VIP', 'VVIP', 'General').allow(null),
          price: Joi.number().allow(null),
          quantity: Joi.number().integer().allow(null),
        }).allow(null)
      ),
      images: Joi.array().items(Joi.string().allow('').allow(null)),
    }).allow(null),
  }).allow(null),
  userIdGet400: Joi.object({}),
  userIdGet404: Joi.object({}),
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
