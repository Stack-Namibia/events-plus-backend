import { mockItGenerator } from 'generate-it-mockers';

import { JwtAccess } from '@/http/nodegen/interfaces/JwtAccess';

import { AddLocationPost } from '@/http/nodegen/interfaces/AddLocationPost';
import { LocationGetQuery } from '@/http/nodegen/interfaces/LocationGetQuery';
import { LocationIdGetPath } from '@/http/nodegen/interfaces/LocationIdGetPath';
import { LocationIdPatchPath } from '@/http/nodegen/interfaces/LocationIdPatchPath';
import { LocationModel } from '@/http/nodegen/interfaces/LocationModel';
import { LocationResponse } from '@/http/nodegen/interfaces/LocationResponse';
import { UpdateLocationPatch } from '@/http/nodegen/interfaces/UpdateLocationPatch';

class LocationDomainMock {
  // Operation ID: getLocations
  async getLocations(
    jwtData: JwtAccess,
    query: LocationGetQuery
  ): Promise<LocationResponse> {
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

  // Operation ID: addLocation
  async addLocation(body: AddLocationPost, jwtData: JwtAccess): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: getLocationById
  async getLocationById(
    jwtData: JwtAccess,
    pathParams: LocationIdGetPath
  ): Promise<LocationModel> {
    return mockItGenerator({
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
    });
  }

  // Operation ID: updateLocation
  async updateLocation(
    body: UpdateLocationPatch,
    jwtData: JwtAccess,
    pathParams: LocationIdPatchPath
  ): Promise<LocationModel> {
    return mockItGenerator({
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
    });
  }
}
export default new LocationDomainMock();
