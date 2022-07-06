import { UserDeletePath, UserIdGetPath, UserPatchPath } from '@/http/nodegen/interfaces';
import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestUserDomain {
  // userDelete
  //
  public static userDeletePath(userId: UserDeletePath['userId'], root: string = baseUrl): string {
    return `${root}/user`;
  }

  public static userDelete(userId: UserDeletePath['userId'], root: string = baseUrl): supertest.Test {
    return request.delete(this.userDeletePath(userId, root));
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
  public static userPatchPath(userId: UserPatchPath['userId'], root: string = baseUrl): string {
    return `${root}/user`;
  }

  public static userPatch(userId: UserPatchPath['userId'], root: string = baseUrl): supertest.Test {
    return request.patch(this.userPatchPath(userId, root));
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
  public static userIdGetPath(userId: UserIdGetPath['userId'], root: string = baseUrl): string {
    return `${root}/user/${id}`;
  }

  public static userIdGet(userId: UserIdGetPath['userId'], root: string = baseUrl): supertest.Test {
    return request.get(this.userIdGetPath(userId, root));
  }
}
