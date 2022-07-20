import { baseUrl, defaultSetupTeardown, mockAuth, request } from '@/http/nodegen/tests';
import { registerUserBodyRegisterUserPost, responseValidator } from '@/http/nodegen/tests/RegisterDomain.data';

defaultSetupTeardown();

describe('RegisterDomain', () => {
  beforeEach(async () => {
    mockAuth(); // Disable auth middleware
  });

  it('can POST /register/user', async () => {
    await request
      .post(`${baseUrl}/register/user`)
      .send(registerUserBodyRegisterUserPost)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('registerUserPost200', body);
        expect(validated.error).toBe(undefined);
      });
  });
});
