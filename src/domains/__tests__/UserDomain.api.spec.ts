import { baseUrl, defaultSetupTeardown, mockAuth, request } from '@/http/nodegen/tests';
import {
  createUserBodyCreateUserPost,
  loginQueryPassword,
  loginQueryUsername,
  pathId as id,
  responseValidator,
  updateUserBodyUpdateUserPatch,
} from '@/http/nodegen/tests/UserDomain.data';

defaultSetupTeardown();

describe('UserDomain', () => {
  beforeEach(async () => {
    mockAuth(); // Disable auth middleware
  });

  it('can DELETE /user', async () => {
    await request
      .delete(`${baseUrl}/user`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);
      });
  });

  it('can GET /user', async () => {
    await request
      .get(`${baseUrl}/user`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('userGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can POST /user', async () => {
    await request
      .post(`${baseUrl}/user`)
      .send(createUserBodyCreateUserPost)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);
      });
  });

  it('can PUT /user', async () => {
    await request
      .put(`${baseUrl}/user`)
      .send(updateUserBodyUpdateUserPatch)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('userPut200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can GET /user/login', async () => {
    await request
      .get(`${baseUrl}/user/login`)
      .set({ Authorization: 'Bearer base64string' })
      .query({ username: loginQueryUsername, password: loginQueryPassword })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('userLoginGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can GET /user/logout', async () => {
    await request
      .get(`${baseUrl}/user/logout`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);
      });
  });

  it('can GET /user/{id}', async () => {
    await request
      .get(`${baseUrl}/user/${id}`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('userUserNameGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });
});
