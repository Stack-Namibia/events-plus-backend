import { baseUrl, defaultSetupTeardown, mockAuth, request } from '@/http/nodegen/tests';
import { addTicketBodyAddTicketPost, pathId as id, responseValidator } from '@/http/nodegen/tests/TicketDomain.data';

defaultSetupTeardown();

describe('TicketDomain', () => {
  beforeEach(async () => {
    mockAuth(); // Disable auth middleware
  });

  it('can GET /ticket', async () => {
    await request
      .get(`${baseUrl}/ticket`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('ticketGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can POST /ticket', async () => {
    await request
      .post(`${baseUrl}/ticket`)
      .send(addTicketBodyAddTicketPost)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);
      });
  });

  it('can GET /ticket/{id}', async () => {
    await request
      .get(`${baseUrl}/ticket/${id}`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('ticketIdGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });
});
