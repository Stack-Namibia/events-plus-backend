import { AuthorizeModel } from '@/http/nodegen/interfaces';

import { AuthorizeDomainInterface } from '@/http/nodegen/domainInterfaces/AuthorizeDomainInterface';
import { JwtAccess } from '@/http/nodegen/interfaces';
import NodegenRequest from '../http/interfaces/NodegenRequest';

import AuthorizeDomainMock from './__mocks__/AuthorizeDomainMock';

class AuthorizeDomain implements AuthorizeDomainInterface {
  /**
   * Operation ID: authorize
   * Path middleware used see: AuthorizeDomainInterface.authorize
   * Summary: Login/Sign in user
   * Description: Exchange a firebase token with an api token
   **/
  public async authorize(jwtData: JwtAccess, req: NodegenRequest): Promise<AuthorizeModel> {
    return AuthorizeDomainMock.authorize(jwtData, req);
  }
}

export default new AuthorizeDomain();
