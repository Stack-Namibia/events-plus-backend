import { UserDeletePath, UserUserNameGetPath } from '@/http/nodegen/interfaces';
import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestUserDomain {
  // userDelete
  //
  public static userDeletePath(userName: UserDeletePath['userName'], root: string = baseUrl): string {
    return `${root}/user`;
  }

  public static userDelete(userName: UserDeletePath['userName'], root: string = baseUrl): supertest.Test {
    return request.delete(this.userDeletePath(userName, root));
  }

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

  // userPut
  //
  public static userPutPath(userName: any['userName'], root: string = baseUrl): string {
    return `${root}/user`;
  }

  public static userPut(userName: any['userName'], root: string = baseUrl): supertest.Test {
    return request.put(this.userPutPath(userName, root));
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

  // userUserNameGet
  //
  public static userUserNameGetPath(userName: UserUserNameGetPath['userName'], root: string = baseUrl): string {
    return `${root}/user/${userName}`;
  }

  public static userUserNameGet(userName: UserUserNameGetPath['userName'], root: string = baseUrl): supertest.Test {
    return request.get(this.userUserNameGetPath(userName, root));
  }
}
