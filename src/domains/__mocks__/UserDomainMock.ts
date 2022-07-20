import { mockItGenerator } from 'generate-it-mockers';

import { JwtAccess } from '@/http/nodegen/interfaces/JwtAccess';

import { CreateUserPost } from '@/http/nodegen/interfaces/CreateUserPost';
import { UpdateUserPatch } from '@/http/nodegen/interfaces/UpdateUserPatch';
import { UserGetQuery } from '@/http/nodegen/interfaces/UserGetQuery';
import { UserIdDeletePath } from '@/http/nodegen/interfaces/UserIdDeletePath';
import { UserIdGetPath } from '@/http/nodegen/interfaces/UserIdGetPath';
import { UserIdPatchPath } from '@/http/nodegen/interfaces/UserIdPatchPath';
import { UserModel } from '@/http/nodegen/interfaces/UserModel';
import { UserResponse } from '@/http/nodegen/interfaces/UserResponse';

class UserDomainMock {
  // Operation ID: getUsers
  async getUsers(
    jwtData: JwtAccess,
    query: UserGetQuery
  ): Promise<UserResponse> {
    return mockItGenerator({
      type: 'object',
      required: ['data'],
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              _id: { type: 'string', readOnly: true },
              first_name: { type: 'string', description: 'Users firstname' },
              last_name: { type: 'string', description: 'Users lastname' },
              mobile: { type: 'string', description: 'Users mobile number' },
              gender: {
                description: 'Users gender',
                type: 'string',
                enum: ['male', 'female', 'other'],
                example: 'male',
              },
              email: {
                type: 'string',
                format: 'email',
                description: 'Users email',
              },
              date_of_birth: {
                type: 'string',
                description: 'Users date of birth',
              },
              profilePic: {
                type: 'string',
                description: 'Users profile picture url',
              },
              firebaseToken: {
                type: 'string',
                nullable: true,
                example: 'ej.433355d332rq3gdasfdsfgsggasgsdgga34t2t63653525',
              },
            },
            example: {
              first_name: 'Kathryn',
              last_name: 'Bennett',
              mobile: 264816639110,
              gender: 'male',
              email: 'example@gmail.com',
              date_of_birth: '1962-01-01',
            },
            required: [
              'id',
              'first_name',
              'last_name',
              'email',
              'mobile',
              'gender',
              'date_of_birth',
            ],
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

  // Operation ID: createUser
  async createUser(body: CreateUserPost, jwtData: JwtAccess): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: deleteUser
  async deleteUser(
    jwtData: JwtAccess,
    pathParams: UserIdDeletePath
  ): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: getUserById
  async getUserById(
    jwtData: JwtAccess,
    pathParams: UserIdGetPath
  ): Promise<UserModel> {
    return mockItGenerator({
      type: 'object',
      properties: {
        _id: { type: 'string', readOnly: true },
        first_name: { type: 'string', description: 'Users firstname' },
        last_name: { type: 'string', description: 'Users lastname' },
        mobile: { type: 'string', description: 'Users mobile number' },
        gender: {
          description: 'Users gender',
          type: 'string',
          enum: ['male', 'female', 'other'],
          example: 'male',
        },
        email: { type: 'string', format: 'email', description: 'Users email' },
        date_of_birth: { type: 'string', description: 'Users date of birth' },
        profilePic: {
          type: 'string',
          description: 'Users profile picture url',
        },
        firebaseToken: {
          type: 'string',
          nullable: true,
          example: 'ej.433355d332rq3gdasfdsfgsggasgsdgga34t2t63653525',
        },
      },
      example: {
        first_name: 'Kathryn',
        last_name: 'Bennett',
        mobile: 264816639110,
        gender: 'male',
        email: 'example@gmail.com',
        date_of_birth: '1962-01-01',
      },
      required: [
        'id',
        'first_name',
        'last_name',
        'email',
        'mobile',
        'gender',
        'date_of_birth',
      ],
    });
  }

  // Operation ID: updateUser
  async updateUser(
    body: UpdateUserPatch,
    jwtData: JwtAccess,
    pathParams: UserIdPatchPath
  ): Promise<UserModel> {
    return mockItGenerator({
      type: 'object',
      properties: {
        _id: { type: 'string', readOnly: true },
        first_name: { type: 'string', description: 'Users firstname' },
        last_name: { type: 'string', description: 'Users lastname' },
        mobile: { type: 'string', description: 'Users mobile number' },
        gender: {
          description: 'Users gender',
          type: 'string',
          enum: ['male', 'female', 'other'],
          example: 'male',
        },
        email: { type: 'string', format: 'email', description: 'Users email' },
        date_of_birth: { type: 'string', description: 'Users date of birth' },
        profilePic: {
          type: 'string',
          description: 'Users profile picture url',
        },
        firebaseToken: {
          type: 'string',
          nullable: true,
          example: 'ej.433355d332rq3gdasfdsfgsggasgsdgga34t2t63653525',
        },
      },
      example: {
        first_name: 'Kathryn',
        last_name: 'Bennett',
        mobile: 264816639110,
        gender: 'male',
        email: 'example@gmail.com',
        date_of_birth: '1962-01-01',
      },
      required: [
        'id',
        'first_name',
        'last_name',
        'email',
        'mobile',
        'gender',
        'date_of_birth',
      ],
    });
  }
}
export default new UserDomainMock();
