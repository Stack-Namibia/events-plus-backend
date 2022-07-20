import { baseUrl, defaultSetupTeardown, mockAuth, request } from '@/http/nodegen/tests';
import {
  addLocationBodyAddLocationPost,
  pathId as id,
  responseValidator,
  updateLocationBodyUpdateLocationPatch,
} from '@/http/nodegen/tests/LocationDomain.data';

defaultSetupTeardown();

describe('LocationDomain', () => {
  beforeEach(async () => {
    mockAuth(); // Disable auth middleware
  });

  it('can GET /location', async () => {
    await request
      .get(`${baseUrl}/location`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('locationGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can POST /location', async () => {
    await request
      .post(`${baseUrl}/location`)
      .send(addLocationBodyAddLocationPost)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);
      });
  });

  it('can GET /location/{id}', async () => {
    await request
      .get(`${baseUrl}/location/${id}`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('locationIdGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can PATCH /location/{id}', async () => {
    await request
      .patch(`${baseUrl}/location/${id}`)
      .send(updateLocationBodyUpdateLocationPatch)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('locationIdPatch200', body);
        expect(validated.error).toBe(undefined);
      });
  });
});
