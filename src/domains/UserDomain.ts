import {
  CreateUserPost,
  UpdateUserPatch,
  UserDeletePath,
  UserLoginGetQuery,
  UserIdGetPath,
} from '@/http/nodegen/interfaces';

import { UserDomainInterface } from '@/http/nodegen/domainInterfaces/UserDomainInterface';
import { JwtAccess } from '@/http/nodegen/interfaces';

import UserDomainMock from './__mocks__/UserDomainMock';

class UserDomain implements UserDomainInterface {
  /**
   * Operation ID: deleteUser
   * Path middleware used see: UserDomainInterface.deleteUser
   * Summary: Delete user
   * Description: This can only be done by the logged in user.
   **/
  public async deleteUser(jwtData: JwtAccess, params: UserDeletePath): Promise<any> {
    return UserDomainMock.deleteUser(jwtData, params);
  }

  /**
   * Operation ID: getUsers
   * Path middleware used see: UserDomainInterface.getUsers
   * Summary: Get all  user
   * Description: get all users from the server.
   **/
  public async getUsers(jwtData: JwtAccess): Promise<any> {
    return UserDomainMock.getUsers(jwtData);
  }

  /**
   * Operation ID: createUser
   * Path middleware used see: UserDomainInterface.createUser
   * Summary: Create user
   * Description: This can only be done by the logged in user.
   **/
  public async createUser(body: CreateUserPost, jwtData: JwtAccess): Promise<any> {
    return UserDomainMock.createUser(body, jwtData);
  }

  /**
   * Operation ID: updateUser
   * Path middleware used see: UserDomainInterface.updateUser
   * Summary: Updated user
   * Description: This can only be done by the logged in user.
   **/
  public async updateUser(body: UpdateUserPatch, jwtData: JwtAccess, params: any): Promise<any> {
    return UserDomainMock.updateUser(body, jwtData, params);
  }

  /**
   * Operation ID: login
   * Path middleware used see: UserDomainInterface.login
   * Summary: login/sign in user
   * Description: get the api token
   **/
  public async login(jwtData: JwtAccess, query: UserLoginGetQuery): Promise<any> {
    return UserDomainMock.login(jwtData, query);
  }

  /**
   * Operation ID: logoutUser
   * Path middleware used see: UserDomainInterface.logoutUser
   * Summary: Logs out current logged in user session
   * Description: delete the api token
   **/
  public async logoutUser(jwtData: JwtAccess): Promise<any> {
    return UserDomainMock.logoutUser(jwtData);
  }

  /**
   * Operation ID: getUserByName
   * Path middleware used see: UserDomainInterface.getUserByName
   * Summary: undefined
   * Description: Get user by name
   **/
  public async getUserById(jwtData: JwtAccess, params: UserIdGetPath): Promise<any> {
    return UserDomainMock.getUserById(jwtData, params);
  }
}

export default new UserDomain();
