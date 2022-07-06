import { mockItGenerator } from 'generate-it-mockers';

import { JwtAccess } from '@/http/nodegen/interfaces/JwtAccess';

import { AddTicketPost } from '@/http/nodegen/interfaces/AddTicketPost';
import { TicketIdGetPath } from '@/http/nodegen/interfaces/TicketIdGetPath';
import { TicketResponse } from '@/http/nodegen/interfaces/TicketResponse';

class TicketDomainMock {
  // Operation ID: getTickets
  async getTickets(jwtData: JwtAccess): Promise<TicketResponse> {
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
              type: { type: 'string', enum: ['VIP', 'VVIP', 'General'] },
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

  // Operation ID: addTicket
  async addTicket(body: AddTicketPost, jwtData: JwtAccess): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: getTicketById
  async getTicketById(
    jwtData: JwtAccess,
    pathParams: TicketIdGetPath
  ): Promise<TicketResponse> {
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
              type: { type: 'string', enum: ['VIP', 'VVIP', 'General'] },
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
}
export default new TicketDomainMock();
