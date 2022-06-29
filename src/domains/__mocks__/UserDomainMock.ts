import { mockItGenerator } from 'generate-it-mockers';

import { JwtAccess } from '@/http/nodegen/interfaces/JwtAccess';

import { CreateUserPost } from '@/http/nodegen/interfaces/CreateUserPost';
import { UpdateUserPut } from '@/http/nodegen/interfaces/UpdateUserPut';
import { User } from '@/http/nodegen/interfaces/User';
import { UserDeletePath } from '@/http/nodegen/interfaces/UserDeletePath';
import { UserLoginGetQuery } from '@/http/nodegen/interfaces/UserLoginGetQuery';
import { UserUserNameGetPath } from '@/http/nodegen/interfaces/UserUserNameGetPath';

class UserDomainMock {
  // Operation ID: deleteUser
  async deleteUser(
    jwtData: JwtAccess,
    pathParams: UserDeletePath
  ): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: getUsers
  async getUsers(jwtData: JwtAccess): Promise<User> {
    return mockItGenerator({
      type: 'object',
      properties: {
        _id: { type: 'string', format: 'uuid' },
        first_name: { type: 'string', description: 'Users firstname' },
        last_name: { type: 'string', description: 'Users lastname' },
        email: { type: 'string', format: 'email', description: 'Users email' },
        date_of_birth: {
          type: 'string',
          format: 'date',
          description: 'Users date of birth',
        },
        password: { type: 'string', format: 'password' },
        auth_token: { type: 'string' },
        favorites: {
          type: 'object',
          properties: {
            _id: { type: 'string', format: 'uuid' },
            name: { type: 'string', description: 'Events name' },
            description: { type: 'string', description: 'Events description' },
            host: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: { type: 'string', format: 'uuid' },
                  name: { type: 'string' },
                  email: { type: 'string', format: 'email' },
                  phoneNumber: { type: 'string' },
                },
                example: {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  name: 'Seattle Coffee',
                  email: 'host@gmail.com',
                  phone_no: '123456789',
                },
              },
            },
            category: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: { type: 'string', format: 'uuid' },
                  name: { type: 'string' },
                },
                example: {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  name: 'Concert',
                },
              },
            },
            eventDate: { type: 'string', format: 'date' },
            endTime: { type: 'string' },
            location: {
              type: 'object',
              properties: {
                _id: { type: 'string', format: 'uuid' },
                name: { type: 'string' },
                address: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                zip: { type: 'string' },
                country: { type: 'string' },
                longitude: { type: 'string' },
                latitude: { type: 'string' },
              },
              example: {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                name: 'Seattle Coffee',
                address: '123456789',
                city: 'Seattle',
                state: 'WA',
                zip: '98000',
                country: 'USA',
                longitude: '-122.3320708',
                latitude: '47.6062095',
              },
            },
            attendance: { type: 'integer', format: 'int32' },
            tickets: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: { type: 'integer', format: 'uuid' },
                  type: { type: 'string', enum: ['VIP', 'General'] },
                  price: { type: 'number' },
                  quantity: { type: 'integer' },
                },
                example: {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  type: 'General Admission',
                  price: 150,
                  quantity: 100,
                },
              },
            },
            images: { type: 'array', items: { type: 'string', format: 'uri' } },
          },
          example: {
            _id: '6e210bfd-4673-493d-aa23-68305a718710',
            name: 'Coffee concert',
            description: 'Coffee concert',
            host: [
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                name: 'Seattle Coffee',
                email: 'host@gmail.com',
                phone_no: '123456789',
              },
            ],
            category: [
              { _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f', name: 'Concert' },
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                name: 'Coffee meetup',
              },
            ],
            event_datetime: '2020-01-01T00:00:00.000Z',
            end_time: '2020-01-01T00:00:00.000Z',
            location: {
              _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
              name: 'Seattle Coffee',
              address: '123456789',
              city: 'Seattle',
              state: 'WA',
              zip: '98000',
              country: 'USA',
              longitude: '-122.3320708',
              latitude: '47.6062095',
            },
            attendance: 150,
            tickets: [
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                type: 'General Admission',
                price: '150.00',
                quantity: 100,
              },
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                type: 'VIP',
                price: '200.00',
                quantity: 50,
              },
            ],
            images: [
              {
                url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
              },
            ],
          },
        },
      },
      example: {
        _id: '6e210bfd-4673-493d-aa23-68305a718710',
        first_name: 'Kathryn',
        last_name: 'Bennett',
        date_of_birth: '1962-01-01',
        email: 'example@gmail.com',
        password: 'password',
        created_at: '2020-01-01T00:00:00.000Z',
        updated_at: '2020-01-01T00:00:00.000Z',
        auth_token:
          'adsjfdsoahdsfoiuahrnlvihbsaouybvclkhsabdcuyvcgqsoflurbgourygrwbekuiybvfkjhbkueyg',
        favorites: [{ _id: '5e210bfd-4673-493d-aa23-68305a718710' }],
      },
    });
  }

  // Operation ID: createUser
  async createUser(body: CreateUserPost, jwtData: JwtAccess): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: updateUser
  async updateUser(
    body: UpdateUserPut,
    jwtData: JwtAccess,
    pathParams: any
  ): Promise<User> {
    return mockItGenerator({
      type: 'object',
      properties: {
        _id: { type: 'string', format: 'uuid' },
        first_name: { type: 'string', description: 'Users firstname' },
        last_name: { type: 'string', description: 'Users lastname' },
        email: { type: 'string', format: 'email', description: 'Users email' },
        date_of_birth: {
          type: 'string',
          format: 'date',
          description: 'Users date of birth',
        },
        password: { type: 'string', format: 'password' },
        auth_token: { type: 'string' },
        favorites: {
          type: 'object',
          properties: {
            _id: { type: 'string', format: 'uuid' },
            name: { type: 'string', description: 'Events name' },
            description: { type: 'string', description: 'Events description' },
            host: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: { type: 'string', format: 'uuid' },
                  name: { type: 'string' },
                  email: { type: 'string', format: 'email' },
                  phoneNumber: { type: 'string' },
                },
                example: {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  name: 'Seattle Coffee',
                  email: 'host@gmail.com',
                  phone_no: '123456789',
                },
              },
            },
            category: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: { type: 'string', format: 'uuid' },
                  name: { type: 'string' },
                },
                example: {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  name: 'Concert',
                },
              },
            },
            eventDate: { type: 'string', format: 'date' },
            endTime: { type: 'string' },
            location: {
              type: 'object',
              properties: {
                _id: { type: 'string', format: 'uuid' },
                name: { type: 'string' },
                address: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                zip: { type: 'string' },
                country: { type: 'string' },
                longitude: { type: 'string' },
                latitude: { type: 'string' },
              },
              example: {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                name: 'Seattle Coffee',
                address: '123456789',
                city: 'Seattle',
                state: 'WA',
                zip: '98000',
                country: 'USA',
                longitude: '-122.3320708',
                latitude: '47.6062095',
              },
            },
            attendance: { type: 'integer', format: 'int32' },
            tickets: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: { type: 'integer', format: 'uuid' },
                  type: { type: 'string', enum: ['VIP', 'General'] },
                  price: { type: 'number' },
                  quantity: { type: 'integer' },
                },
                example: {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  type: 'General Admission',
                  price: 150,
                  quantity: 100,
                },
              },
            },
            images: { type: 'array', items: { type: 'string', format: 'uri' } },
          },
          example: {
            _id: '6e210bfd-4673-493d-aa23-68305a718710',
            name: 'Coffee concert',
            description: 'Coffee concert',
            host: [
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                name: 'Seattle Coffee',
                email: 'host@gmail.com',
                phone_no: '123456789',
              },
            ],
            category: [
              { _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f', name: 'Concert' },
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                name: 'Coffee meetup',
              },
            ],
            event_datetime: '2020-01-01T00:00:00.000Z',
            end_time: '2020-01-01T00:00:00.000Z',
            location: {
              _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
              name: 'Seattle Coffee',
              address: '123456789',
              city: 'Seattle',
              state: 'WA',
              zip: '98000',
              country: 'USA',
              longitude: '-122.3320708',
              latitude: '47.6062095',
            },
            attendance: 150,
            tickets: [
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                type: 'General Admission',
                price: '150.00',
                quantity: 100,
              },
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                type: 'VIP',
                price: '200.00',
                quantity: 50,
              },
            ],
            images: [
              {
                url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
              },
            ],
          },
        },
      },
      example: {
        _id: '6e210bfd-4673-493d-aa23-68305a718710',
        first_name: 'Kathryn',
        last_name: 'Bennett',
        date_of_birth: '1962-01-01',
        email: 'example@gmail.com',
        password: 'password',
        created_at: '2020-01-01T00:00:00.000Z',
        updated_at: '2020-01-01T00:00:00.000Z',
        auth_token:
          'adsjfdsoahdsfoiuahrnlvihbsaouybvclkhsabdcuyvcgqsoflurbgourygrwbekuiybvfkjhbkueyg',
        favorites: [{ _id: '5e210bfd-4673-493d-aa23-68305a718710' }],
      },
    });
  }

  // Operation ID: login
  async login(jwtData: JwtAccess, query: UserLoginGetQuery): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: logoutUser
  async logoutUser(jwtData: JwtAccess): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: getUserByName
  async getUserByName(
    jwtData: JwtAccess,
    pathParams: UserUserNameGetPath
  ): Promise<User> {
    return mockItGenerator({
      type: 'object',
      properties: {
        _id: { type: 'string', format: 'uuid' },
        first_name: { type: 'string', description: 'Users firstname' },
        last_name: { type: 'string', description: 'Users lastname' },
        email: { type: 'string', format: 'email', description: 'Users email' },
        date_of_birth: {
          type: 'string',
          format: 'date',
          description: 'Users date of birth',
        },
        password: { type: 'string', format: 'password' },
        auth_token: { type: 'string' },
        favorites: {
          type: 'object',
          properties: {
            _id: { type: 'string', format: 'uuid' },
            name: { type: 'string', description: 'Events name' },
            description: { type: 'string', description: 'Events description' },
            host: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: { type: 'string', format: 'uuid' },
                  name: { type: 'string' },
                  email: { type: 'string', format: 'email' },
                  phoneNumber: { type: 'string' },
                },
                example: {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  name: 'Seattle Coffee',
                  email: 'host@gmail.com',
                  phone_no: '123456789',
                },
              },
            },
            category: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: { type: 'string', format: 'uuid' },
                  name: { type: 'string' },
                },
                example: {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  name: 'Concert',
                },
              },
            },
            eventDate: { type: 'string', format: 'date' },
            endTime: { type: 'string' },
            location: {
              type: 'object',
              properties: {
                _id: { type: 'string', format: 'uuid' },
                name: { type: 'string' },
                address: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                zip: { type: 'string' },
                country: { type: 'string' },
                longitude: { type: 'string' },
                latitude: { type: 'string' },
              },
              example: {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                name: 'Seattle Coffee',
                address: '123456789',
                city: 'Seattle',
                state: 'WA',
                zip: '98000',
                country: 'USA',
                longitude: '-122.3320708',
                latitude: '47.6062095',
              },
            },
            attendance: { type: 'integer', format: 'int32' },
            tickets: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: { type: 'integer', format: 'uuid' },
                  type: { type: 'string', enum: ['VIP', 'General'] },
                  price: { type: 'number' },
                  quantity: { type: 'integer' },
                },
                example: {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  type: 'General Admission',
                  price: 150,
                  quantity: 100,
                },
              },
            },
            images: { type: 'array', items: { type: 'string', format: 'uri' } },
          },
          example: {
            _id: '6e210bfd-4673-493d-aa23-68305a718710',
            name: 'Coffee concert',
            description: 'Coffee concert',
            host: [
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                name: 'Seattle Coffee',
                email: 'host@gmail.com',
                phone_no: '123456789',
              },
            ],
            category: [
              { _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f', name: 'Concert' },
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                name: 'Coffee meetup',
              },
            ],
            event_datetime: '2020-01-01T00:00:00.000Z',
            end_time: '2020-01-01T00:00:00.000Z',
            location: {
              _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
              name: 'Seattle Coffee',
              address: '123456789',
              city: 'Seattle',
              state: 'WA',
              zip: '98000',
              country: 'USA',
              longitude: '-122.3320708',
              latitude: '47.6062095',
            },
            attendance: 150,
            tickets: [
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                type: 'General Admission',
                price: '150.00',
                quantity: 100,
              },
              {
                _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                type: 'VIP',
                price: '200.00',
                quantity: 50,
              },
            ],
            images: [
              {
                url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
              },
            ],
          },
        },
      },
      example: {
        _id: '6e210bfd-4673-493d-aa23-68305a718710',
        first_name: 'Kathryn',
        last_name: 'Bennett',
        date_of_birth: '1962-01-01',
        email: 'example@gmail.com',
        password: 'password',
        created_at: '2020-01-01T00:00:00.000Z',
        updated_at: '2020-01-01T00:00:00.000Z',
        auth_token:
          'adsjfdsoahdsfoiuahrnlvihbsaouybvclkhsabdcuyvcgqsoflurbgourygrwbekuiybvfkjhbkueyg',
        favorites: [{ _id: '5e210bfd-4673-493d-aa23-68305a718710' }],
      },
    });
  }
}
export default new UserDomainMock();
