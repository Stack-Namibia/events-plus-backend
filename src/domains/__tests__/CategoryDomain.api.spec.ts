import { baseUrl, defaultSetupTeardown, mockAuth, request } from '@/http/nodegen/tests';
import {
  addCategoryBodyAddCategoryPost,
  pathCategoryId as categoryId,
  responseValidator,
  updateCategoryBodyUpdateCategoryPatch,
} from '@/http/nodegen/tests/CategoryDomain.data';

defaultSetupTeardown();

describe('CategoryDomain', () => {
  beforeEach(async () => {
    mockAuth(); // Disable auth middleware
  });

  it('can GET /category', async () => {
    await request
      .get(`${baseUrl}/category`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('categoryGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can POST /category', async () => {
    await request
      .post(`${baseUrl}/category`)
      .send(addCategoryBodyAddCategoryPost)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);
      });
  });

  it('can DELETE /category/{id}', async () => {
    await request
      .delete(`${baseUrl}/category/${id}`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);
      });
  });

  it('can GET /category/{id}', async () => {
    await request
      .get(`${baseUrl}/category/${id}`)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('categoryIdGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can PATCH /category/{id}', async () => {
    await request
      .patch(`${baseUrl}/category/${id}`)
      .send(updateCategoryBodyUpdateCategoryPatch)
      .set({ Authorization: 'Bearer base64string' })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('categoryIdPatch200', body);
        expect(validated.error).toBe(undefined);
      });
  });
});
