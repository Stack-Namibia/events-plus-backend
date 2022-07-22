import { AuthorizeModel } from '@/http/nodegen/interfaces';

import { AuthorizeDomainInterface } from '@/http/nodegen/domainInterfaces/AuthorizeDomainInterface';
import { JwtAccess } from '@/http/nodegen/interfaces';
import NodegenRequest from '../http/interfaces/NodegenRequest';
import { UserModel } from '@/database/models/user.model';
import http401 from '@/http/nodegen/errors/401';
import AccessTokenService from '@/services/AccessTokenService';

class AuthorizeDomain implements AuthorizeDomainInterface {
  /**
   * Operation ID: authorize
   * Path middleware used see: AuthorizeDomainInterface.authorize
   * Summary: Login/Sign in user
   * Description: Exchange a firebase token with an api token
   **/
  public async authorize(jwtData: JwtAccess, req: NodegenRequest): Promise<AuthorizeModel> {
    const user = await UserModel.findById(jwtData.sub);
    if (!user) {
      throw http401();
    }
    const token = AccessTokenService.generateJWToken({
      sessionData: { sub: user.id },
      maxAge: 3600,
    });
    return {
      token,
      user: user.toJSON() as any,
    };
  }
}

export default new AuthorizeDomain();
