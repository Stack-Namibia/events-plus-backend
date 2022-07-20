import {
  AuthorizeUserModel,
  RegisterUserPost,
} from '@/http/nodegen/interfaces';
import { JwtAccess } from '@/http/nodegen/interfaces';
import NodegenRequest from '@/http/interfaces/NodegenRequest';

export interface RegisterDomainInterface {
  /**
   * Operation ID: registerUser
   * Summary: Register/Sign up a user
   * Description: No description written
   * Security header(s): ['Authorization']
   **/
  registerUser(
    body: RegisterUserPost,
    jwtData: JwtAccess,
    req: any
  ): Promise<AuthorizeUserModel>;
}
