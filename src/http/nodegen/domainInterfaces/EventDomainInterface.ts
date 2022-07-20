import {
  AddEventPost,
  EventEventIdDeletePath,
  EventEventIdGetPath,
  EventGetQuery,
  EventModel,
  EventResponse,
} from '@/http/nodegen/interfaces';
import { JwtAccess } from '@/http/nodegen/interfaces';

export interface EventDomainInterface {
  /**
   * Operation ID: getEvents
   * Summary: undefined
   * Description: get all events
   * No additional middleware used
   **/
  getEvents(query: EventGetQuery): Promise<EventResponse>;

  /**
   * Operation ID: addEvent
   * Summary: undefined
   * Description: add new event
   * Security header(s): ['Authorization']
   **/
  addEvent(body: AddEventPost, jwtData: JwtAccess): Promise<any>;

  /**
   * Operation ID: deleteEventById
   * Summary: undefined
   * Description: Delete event based on path parameter
   * Security header(s): ['Authorization']
   **/
  deleteEventById(
    jwtData: JwtAccess,
    params: EventEventIdDeletePath
  ): Promise<any>;

  /**
   * Operation ID: getEventById
   * Summary: undefined
   * Description: Returns a single event by id
   * Security header(s): ['Authorization']
   **/
  getEventById(
    jwtData: JwtAccess,
    params: EventEventIdGetPath
  ): Promise<EventModel>;
}
