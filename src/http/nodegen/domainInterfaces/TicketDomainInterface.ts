import {
  AddTicketPost,
  TicketIdGetPath,
  TicketResponse,
} from '@/http/nodegen/interfaces';
import { JwtAccess } from '@/http/nodegen/interfaces';

export interface TicketDomainInterface {
  /**
   * Operation ID: getTickets
   * Summary: undefined
   * Description: get all Tickets
   * Security header(s): ['Authorization']
   **/
  getTickets(jwtData: JwtAccess): Promise<TicketResponse>;

  /**
   * Operation ID: addTicket
   * Summary: undefined
   * Description: add new Ticket
   * Security header(s): ['Authorization']
   **/
  addTicket(body: AddTicketPost, jwtData: JwtAccess): Promise<any>;

  /**
   * Operation ID: getTicketById
   * Summary: undefined
   * Description: Returns a single Ticket by id
   * Security header(s): ['Authorization']
   **/
  getTicketById(
    jwtData: JwtAccess,
    params: TicketIdGetPath
  ): Promise<TicketResponse>;
}
