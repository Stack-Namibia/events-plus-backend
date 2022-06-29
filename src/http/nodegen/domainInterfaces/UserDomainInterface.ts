import {
  CreateUserPost,
  UpdateUserPut,
  User,
  UserDeletePath,
  UserLoginGetQuery,
  UserUserNameGetPath,
} from '@/http/nodegen/interfaces';
import { JwtAccess } from '@/http/nodegen/interfaces';

export interface UserDomainInterface {
  /**
   * Operation ID: deleteUser
   * Summary: Delete user
   * Description: This can only be done by the logged in user.
   * Security header(s): ['Authorization']
   **/
  deleteUser(jwtData: JwtAccess, params: UserDeletePath): Promise<any>;

  /**
   * Operation ID: getUsers
   * Summary: Get all  user
   * Description: get all users from the server.
   * Security header(s): ['Authorization']
   **/
  getUsers(jwtData: JwtAccess): Promise<User>;

  /**
   * Operation ID: createUser
   * Summary: Create user
   * Description: This can only be done by the logged in user.
   * Security header(s): ['Authorization']
   **/
  createUser(body: CreateUserPost, jwtData: JwtAccess): Promise<any>;

  /**
   * Operation ID: updateUser
   * Summary: Updated user
   * Description: This can only be done by the logged in user.
   * Security header(s): ['Authorization']
   **/
  updateUser(
    body: UpdateUserPut,
    jwtData: JwtAccess,
    params: any
  ): Promise<User>;

  /**
   * Operation ID: login
   * Summary: login/sign in user
   * Description: get the api token
   * Security header(s): ['Authorization']
   **/
  login(jwtData: JwtAccess, query: UserLoginGetQuery): Promise<any>;

  /**
   * Operation ID: logoutUser
   * Summary: Logs out current logged in user session
   * Description: delete the api token
   * Security header(s): ['Authorization']
   **/
  logoutUser(jwtData: JwtAccess): Promise<any>;

  /**
   * Operation ID: getUserByName
   * Summary: undefined
   * Description: Get user by name
   * Security header(s): ['Authorization']
   **/
  getUserByName(jwtData: JwtAccess, params: UserUserNameGetPath): Promise<User>;
}
