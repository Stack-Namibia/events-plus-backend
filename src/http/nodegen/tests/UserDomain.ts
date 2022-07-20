import { UserIdDeletePath, UserIdGetPath, UserIdPatchPath } from '@/http/nodegen/interfaces';
import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestUserDomain {
  // userGet
  //
  public static userGetPath(root: string = baseUrl): string {
    return `${root}/user`;
  }

  public static userGet(root: string = baseUrl): supertest.Test {
    return request.get(this.userGetPath(root));
  }

  // userPost
  //
  public static userPostPath(root: string = baseUrl): string {
    return `${root}/user`;
  }

  public static userPost(root: string = baseUrl): supertest.Test {
    return request.post(this.userPostPath(root));
  }

  // userIdDelete
  //
  public static userIdDeletePath(id: UserIdDeletePath['id'], root: string = baseUrl): string {
    return `${root}/user/${id}`;
  }

  public static userIdDelete(id: UserIdDeletePath['id'], root: string = baseUrl): supertest.Test {
    return request.delete(this.userIdDeletePath(id, root));
  }

  // userIdGet
  //
  public static userIdGetPath(id: UserIdGetPath['id'], root: string = baseUrl): string {
    return `${root}/user/${id}`;
  }

  public static userIdGet(id: UserIdGetPath['id'], root: string = baseUrl): supertest.Test {
    return request.get(this.userIdGetPath(id, root));
  }

  // userIdPatch
  //
  public static userIdPatchPath(id: UserIdPatchPath['id'], root: string = baseUrl): string {
    return `${root}/user/${id}`;
  }

  public static userIdPatch(id: UserIdPatchPath['id'], root: string = baseUrl): supertest.Test {
    return request.patch(this.userIdPatchPath(id, root));
  }
}
