import { baseUrl, defaultSetupTeardown, mockAuth, request } from '@/http/nodegen/tests';
import {
  addEventBodyAddEventPost,
  pathEventId as eventId,
  responseValidator,
} from '@/http/nodegen/tests/EventDomain.data';

defaultSetupTeardown();

describe('EventDomain', () => {
  beforeEach(async () => {
    mockAuth(); // Disable auth middleware
  });

  it('can GET /event', async () => {
    await request
      .get(`${baseUrl}/event`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('eventGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can POST /event', async () => {
    await request
      .post(`${baseUrl}/event`)
      .send(addEventBodyAddEventPost)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);
      });
  });

  it('can DELETE /event/{eventId}', async () => {
    await request
      .delete(`${baseUrl}/event/${eventId}`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);
      });
  });

  it('can GET /event/{eventId}', async () => {
    await request
      .get(`${baseUrl}/event/${eventId}`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('eventEventIdGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });
});
