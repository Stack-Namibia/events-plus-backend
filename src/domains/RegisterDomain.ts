import { AuthorizeUserModel, RegisterUserPost } from '@/http/nodegen/interfaces';

import { RegisterDomainInterface } from '@/http/nodegen/domainInterfaces/RegisterDomainInterface';
import { JwtAccess } from '@/http/nodegen/interfaces';
import NodegenRequest from '../http/interfaces/NodegenRequest';
import { UserModel } from '@/database/models';
import AccessTokenService from '@/services/AccessTokenService';

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
    const user = new UserModel({ ...(body.user as any), id: jwtData.sub });
    await user.save();
    const token = AccessTokenService.generateJWToken({
      sessionData: { sub: jwtData.sub },
      maxAge: 3600,
    });
    return {
      token,
      user: user.toJSON(),
    };
  }
}

export default new RegisterDomain();
