import { EventEventIdDeletePath, EventEventIdGetPath } from '@/http/nodegen/interfaces';
import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestEventDomain {
  // eventGet
  //
  public static eventGetPath(root: string = baseUrl): string {
    return `${root}/event`;
  }

  public static eventGet(root: string = baseUrl): supertest.Test {
    return request.get(this.eventGetPath(root));
  }

  // eventPost
  //
  public static eventPostPath(root: string = baseUrl): string {
    return `${root}/event`;
  }

  public static eventPost(root: string = baseUrl): supertest.Test {
    return request.post(this.eventPostPath(root));
  }

  // eventEventIdDelete
  //
  public static eventEventIdDeletePath(eventId: EventEventIdDeletePath['eventId'], root: string = baseUrl): string {
    return `${root}/event/${eventId}`;
  }

  public static eventEventIdDelete(eventId: EventEventIdDeletePath['eventId'], root: string = baseUrl): supertest.Test {
    return request.delete(this.eventEventIdDeletePath(eventId, root));
  }

  // eventEventIdGet
  //
  public static eventEventIdGetPath(eventId: EventEventIdGetPath['eventId'], root: string = baseUrl): string {
    return `${root}/event/${eventId}`;
  }

  public static eventEventIdGet(eventId: EventEventIdGetPath['eventId'], root: string = baseUrl): supertest.Test {
    return request.get(this.eventEventIdGetPath(eventId, root));
  }
}
