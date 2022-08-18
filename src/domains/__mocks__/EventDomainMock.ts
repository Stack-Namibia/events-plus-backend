import { mockItGenerator } from 'generate-it-mockers';

import { JwtAccess } from '@/http/nodegen/interfaces/JwtAccess';

import { AddEventPost } from '@/http/nodegen/interfaces/AddEventPost';
import { EventEventIdDeletePath } from '@/http/nodegen/interfaces/EventEventIdDeletePath';
import { EventEventIdGetPath } from '@/http/nodegen/interfaces/EventEventIdGetPath';
import { EventGetQuery } from '@/http/nodegen/interfaces/EventGetQuery';
import { EventModel } from '@/http/nodegen/interfaces/EventModel';
import { EventResponse } from '@/http/nodegen/interfaces/EventResponse';

class EventDomainMock {
  // Operation ID: getEvents
  async getEvents(query: EventGetQuery): Promise<EventResponse> {
    return mockItGenerator({
      type: 'object',
      required: ['data'],
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              _id: { type: 'string', format: 'uuid' },
              name: { type: 'string', description: 'Events name' },
              description: {
                type: 'string',
                description: 'Events description',
              },
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
              eventDate: { type: 'string' },
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
                    _id: { type: 'string', format: 'uuid' },
                    type: { type: 'string', enum: ['VIP', 'VVIP', 'General'] },
                    price: { type: 'number' },
                    quantity: { type: 'integer' },
                  },
                  example: {
                    _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                    type: 'General',
                    price: 150,
                    quantity: 100,
                  },
                },
              },
              images: {
                type: 'array',
                items: { type: 'string', format: 'uri' },
              },
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
                {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  name: 'Concert',
                },
                {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  name: 'Coffee meetup',
                },
              ],
              eventDate: '2020-01-01T00:00:00.000Z',
              endTime: '2020-01-01T00:00:00.000Z',
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
                  type: 'General',
                  price: 150,
                  quantity: 100,
                },
                {
                  _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
                  type: 'VIP',
                  price: 200,
                  quantity: 50,
                },
              ],
              images: [
                'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
              ],
            },
          },
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            lastUpdate: { type: 'string', format: 'date-time' },
            skip: { type: 'number' },
            limit: { type: 'number' },
            orderedBy: { type: 'string' },
          },
          additionalProperties: true,
        },
      },
    });
  }

  // Operation ID: addEvent
  async addEvent(body: AddEventPost, jwtData: JwtAccess): Promise<EventModel> {
    return mockItGenerator({
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
        eventDate: { type: 'string' },
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
              _id: { type: 'string', format: 'uuid' },
              type: { type: 'string', enum: ['VIP', 'VVIP', 'General'] },
              price: { type: 'number' },
              quantity: { type: 'integer' },
            },
            example: {
              _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
              type: 'General',
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
        eventDate: '2020-01-01T00:00:00.000Z',
        endTime: '2020-01-01T00:00:00.000Z',
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
            type: 'General',
            price: 150,
            quantity: 100,
          },
          {
            _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
            type: 'VIP',
            price: 200,
            quantity: 50,
          },
        ],
        images: [
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
      },
    });
  }

  // Operation ID: deleteEventById
  async deleteEventById(
    jwtData: JwtAccess,
    pathParams: EventEventIdDeletePath
  ): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: getEventById
  async getEventById(
    jwtData: JwtAccess,
    pathParams: EventEventIdGetPath
  ): Promise<EventModel> {
    return mockItGenerator({
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
        eventDate: { type: 'string' },
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
              _id: { type: 'string', format: 'uuid' },
              type: { type: 'string', enum: ['VIP', 'VVIP', 'General'] },
              price: { type: 'number' },
              quantity: { type: 'integer' },
            },
            example: {
              _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
              type: 'General',
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
        eventDate: '2020-01-01T00:00:00.000Z',
        endTime: '2020-01-01T00:00:00.000Z',
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
            type: 'General',
            price: 150,
            quantity: 100,
          },
          {
            _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
            type: 'VIP',
            price: 200,
            quantity: 50,
          },
        ],
        images: [
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        ],
      },
    });
  }
}
export default new EventDomainMock();
