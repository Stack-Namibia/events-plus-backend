import { UserDeletePath, UserIdGetPath, UserPatchPath } from '@/http/nodegen/interfaces';
import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestUserDomain {
  // userDelete
  //
  public static userDeletePath(id: UserDeletePath['id'], root: string = baseUrl): string {
    return `${root}/user`;
  }

  public static userDelete(id: UserDeletePath['id'], root: string = baseUrl): supertest.Test {
    return request.delete(this.userDeletePath(id, root));
  }

  // userGet
  //
  public static userGetPath(root: string = baseUrl): string {
    return `${root}/user`;
  }

  public static userGet(root: string = baseUrl): supertest.Test {
    return request.get(this.userGetPath(root));
  }

  // userPatch
  //
  public static userPatchPath(id: UserPatchPath['id'], root: string = baseUrl): string {
    return `${root}/user`;
  }

  public static userPatch(id: UserPatchPath['id'], root: string = baseUrl): supertest.Test {
    return request.patch(this.userPatchPath(id, root));
  }

  // userPost
  //
  public static userPostPath(root: string = baseUrl): string {
    return `${root}/user`;
  }

  public static userPost(root: string = baseUrl): supertest.Test {
    return request.post(this.userPostPath(root));
  }

  // userLoginGet
  //
  public static userLoginGetPath(root: string = baseUrl): string {
    return `${root}/user/login`;
  }

  public static userLoginGet(root: string = baseUrl): supertest.Test {
    return request.get(this.userLoginGetPath(root));
  }

  // userLogoutGet
  //
  public static userLogoutGetPath(root: string = baseUrl): string {
    return `${root}/user/logout`;
  }

  public static userLogoutGet(root: string = baseUrl): supertest.Test {
    return request.get(this.userLogoutGetPath(root));
  }

  // userIdGet
  //
  public static userIdGetPath(id: UserIdGetPath['id'], root: string = baseUrl): string {
    return `${root}/user/${id}`;
  }

  public static userIdGet(id: UserIdGetPath['id'], root: string = baseUrl): supertest.Test {
    return request.get(this.userIdGetPath(id, root));
  }
}
