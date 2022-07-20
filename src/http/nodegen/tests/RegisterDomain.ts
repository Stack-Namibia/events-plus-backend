import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestRegisterDomain {
  // registerUserPost
  //
  public static registerUserPostPath(root: string = baseUrl): string {
    return `${root}/register/user`;
  }

  public static registerUserPost(root: string = baseUrl): supertest.Test {
    return request.post(this.registerUserPostPath(root));
  }
}
