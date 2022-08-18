import {
  AuthorizeUserModel,
  RegisterUserPost,
} from '@/http/nodegen/interfaces';

import { RegisterDomainInterface } from '@/http/nodegen/domainInterfaces/RegisterDomainInterface';
import { JwtAccess } from '@/http/nodegen/interfaces';
import NodegenRequest from '../http/interfaces/NodegenRequest';

import RegisterDomainMock from './__mocks__/RegisterDomainMock';

class RegisterDomain implements RegisterDomainInterface {
  /**
   * Operation ID: registerUser
   * Path middleware used see: RegisterDomainInterface.registerUser
   * Summary: Register/Sign up a user
   * Description: No description written
   **/
  public async registerUser(
    body: RegisterUserPost,
    jwtData: JwtAccess,
    req: NodegenRequest
  ): Promise<AuthorizeUserModel> {
    return RegisterDomainMock.registerUser(body, jwtData, req);
  }
}

export default new RegisterDomain();
