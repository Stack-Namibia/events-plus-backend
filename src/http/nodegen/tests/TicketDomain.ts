import { TicketIdGetPath } from '@/http/nodegen/interfaces';
import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestTicketDomain {
  // ticketGet
  //
  public static ticketGetPath(root: string = baseUrl): string {
    return `${root}/ticket`;
  }

  public static ticketGet(root: string = baseUrl): supertest.Test {
    return request.get(this.ticketGetPath(root));
  }

  // ticketPost
  //
  public static ticketPostPath(root: string = baseUrl): string {
    return `${root}/ticket`;
  }

  public static ticketPost(root: string = baseUrl): supertest.Test {
    return request.post(this.ticketPostPath(root));
  }

  // ticketIdGet
  //
  public static ticketIdGetPath(ticketId: TicketIdGetPath['ticketId'], root: string = baseUrl): string {
    return `${root}/ticket/${id}`;
  }

  public static ticketIdGet(ticketId: TicketIdGetPath['ticketId'], root: string = baseUrl): supertest.Test {
    return request.get(this.ticketIdGetPath(ticketId, root));
  }
}
