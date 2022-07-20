import { AuthorizeModel } from '@/http/nodegen/interfaces';
import { JwtAccess } from '@/http/nodegen/interfaces';
import NodegenRequest from '@/http/interfaces/NodegenRequest';

export interface AuthorizeDomainInterface {
  /**
   * Operation ID: authorize
   * Summary: Login/Sign in user
   * Description: Exchange a firebase token with an api token
   * Security header(s): ['Authorization']
   **/
  authorize(jwtData: JwtAccess, req: any): Promise<AuthorizeModel>;
}
