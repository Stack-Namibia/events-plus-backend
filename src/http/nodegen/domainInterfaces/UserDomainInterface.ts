import {
  CreateUserPost,
  UpdateUserPatch,
  UserGetQuery,
  UserIdDeletePath,
  UserIdGetPath,
  UserIdPatchPath,
  UserModel,
  UserResponse,
} from '@/http/nodegen/interfaces';
import { JwtAccess } from '@/http/nodegen/interfaces';

export interface UserDomainInterface {
  /**
   * Operation ID: getUsers
   * Summary: Get all  user
   * Description: get all users from the server.
   * Security header(s): ['Authorization']
   **/
  getUsers(jwtData: JwtAccess, query: UserGetQuery): Promise<UserResponse>;

  /**
   * Operation ID: createUser
   * Summary: Create user
   * Description: This can only be done by the logged in user.
   * Security header(s): ['Authorization']
   **/
  createUser(body: CreateUserPost, jwtData: JwtAccess): Promise<any>;

  /**
   * Operation ID: deleteUser
   * Summary: Delete user
   * Description: This can only be done by the logged in user.
   * Security header(s): ['Authorization']
   **/
  deleteUser(jwtData: JwtAccess, params: UserIdDeletePath): Promise<any>;

  /**
   * Operation ID: getUserById
   * Summary: undefined
   * Description: Get user by id
   * Security header(s): ['Authorization']
   **/
  getUserById(jwtData: JwtAccess, params: UserIdGetPath): Promise<UserModel>;

  /**
   * Operation ID: updateUser
   * Summary: Updated user
   * Description: This can only be done by the logged in user.
   * Security header(s): ['Authorization']
   **/
  updateUser(
    body: UpdateUserPatch,
    jwtData: JwtAccess,
    params: UserIdPatchPath
  ): Promise<UserModel>;
}
