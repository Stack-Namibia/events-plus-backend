import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestAuthorizeDomain {
  // authorizeGet
  //
  public static authorizeGetPath(root: string = baseUrl): string {
    return `${root}/authorize`;
  }

  public static authorizeGet(root: string = baseUrl): supertest.Test {
    return request.get(this.authorizeGetPath(root));
  }
}
