import { baseUrl, defaultSetupTeardown, mockAuth, request } from '@/http/nodegen/tests';
import { responseValidator } from '@/http/nodegen/tests/AuthorizeDomain.data';

defaultSetupTeardown();

describe('AuthorizeDomain', () => {
  beforeEach(async () => {
    mockAuth(); // Disable auth middleware
  });

  it('can GET /authorize', async () => {
    await request
      .get(`${baseUrl}/authorize`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('authorizeGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });
});
