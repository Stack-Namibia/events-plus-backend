import { mockItGenerator } from 'generate-it-mockers';

import { JwtAccess } from '@/http/nodegen/interfaces/JwtAccess';

import { AddCategoryPost } from '@/http/nodegen/interfaces/AddCategoryPost';
import { CategoryGetQuery } from '@/http/nodegen/interfaces/CategoryGetQuery';
import { CategoryIdDeletePath } from '@/http/nodegen/interfaces/CategoryIdDeletePath';
import { CategoryIdGetPath } from '@/http/nodegen/interfaces/CategoryIdGetPath';
import { CategoryIdPatchPath } from '@/http/nodegen/interfaces/CategoryIdPatchPath';
import { EventCategoryResponse } from '@/http/nodegen/interfaces/EventCategoryResponse';
import { UpdateCategoryPatch } from '@/http/nodegen/interfaces/UpdateCategoryPatch';

class CategoryDomainMock {
  // Operation ID: getCategories
  async getCategories(
    jwtData: JwtAccess,
    query: CategoryGetQuery
  ): Promise<EventCategoryResponse> {
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
              name: { type: 'string' },
            },
            example: {
              _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
              name: 'Concert',
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

  // Operation ID: addCategory
  async addCategory(body: AddCategoryPost, jwtData: JwtAccess): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: deleteCategoryById
  async deleteCategoryById(
    jwtData: JwtAccess,
    pathParams: CategoryIdDeletePath
  ): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: getCategoryById
  async getCategoryById(
    jwtData: JwtAccess,
    pathParams: CategoryIdGetPath
  ): Promise<EventCategoryResponse> {
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
              name: { type: 'string' },
            },
            example: {
              _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
              name: 'Concert',
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

  // Operation ID: updateCategory
  async updateCategory(
    body: UpdateCategoryPatch,
    jwtData: JwtAccess,
    pathParams: CategoryIdPatchPath
  ): Promise<EventCategoryResponse> {
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
              name: { type: 'string' },
            },
            example: {
              _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f',
              name: 'Concert',
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
export default new CategoryDomainMock();
