import { mockItGenerator } from 'generate-it-mockers';

import { JwtAccess } from '@/http/nodegen/interfaces/JwtAccess';

import { AuthorizeModel } from '@/http/nodegen/interfaces/AuthorizeModel';

class AuthorizeDomainMock {
  // Operation ID: authorize
  async authorize(jwtData: JwtAccess, req: any): Promise<AuthorizeModel> {
    return mockItGenerator({
      type: 'object',
      properties: {
        token: {
          type: 'string',
          readOnly: true,
          example:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5Y3BCVzRKSU0zYWVE...',
        },
        user: {
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
              example: 'ej.433355d332rq3gdasfdsfgsggasgsdgga34t2t63653525  ',
            },
          },
          example: {
            _id: '6e210bfd4673493daa2368305a718710',
            first_name: 'Kathryn',
            last_name: 'Bennett',
            mobile: '264816639110',
            gender: 'male',
            email: 'example@gmail.com',
            date_of_birth: '1962-01-01',
            profilePic:
              'https://firebasestorage.googleapis.com/v0/b/project/o/20-5-2016.png',
            firebaseToken: 'ej.433355d332rq3gdasfdsfgsggasgsdgga34t2t63653525',
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
      required: ['user', 'token'],
    });
  }
}
export default new AuthorizeDomainMock();
