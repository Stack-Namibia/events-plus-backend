import { AddEventPost, Event, EventEventIdDeletePath, EventEventIdGetPath } from '@/http/nodegen/interfaces';

import { EventDomainInterface } from '@/http/nodegen/domainInterfaces/EventDomainInterface';
import { JwtAccess } from '@/http/nodegen/interfaces';

import EventDomainMock from './__mocks__/EventDomainMock';
import { EventModel } from '@/database/models';
import { formatDocument } from '../shared/utils/formatter/response';
import { EventResponse } from '@/http/nodegen/interfaces/EventResponse';

class EventDomain implements EventDomainInterface {
  /**
   * Operation ID: getEvents
   * Path middleware used see: EventDomainInterface.getEvents
   * Summary: undefined
   * Description: get all events
   **/
  public async getEvents(): Promise<EventResponse> {
    const events = await EventModel.find({});
    const total = await EventModel.countDocuments({});
    return {
      data: events.map((event) => formatDocument(event)),
      meta: {
        total,
      },
    };
  }

  /**
   * Operation ID: addEvent
   * Path middleware used see: EventDomainInterface.addEvent
   * Summary: undefined
   * Description: add new event
   **/
  public async addEvent(body: AddEventPost): Promise<any> {
    const event = new EventModel({ ...(body as any) });
    await event.save();
    return 'Event created succesfully!';
    //return EventDomainMock.addEvent(body);
  }

  /**
   * Operation ID: deleteEventById
   * Path middleware used see: EventDomainInterface.deleteEventById
   * Summary: undefined
   * Description: Delete event based on path parameter
   **/
  public async deleteEventById(jwtData: JwtAccess, params: EventEventIdDeletePath): Promise<any> {
    return EventDomainMock.deleteEventById(jwtData, params);
  }

  /**
   * Operation ID: getEventById
   * Path middleware used see: EventDomainInterface.getEventById
   * Summary: undefined
   * Description: Returns a single event by id
   **/
  public async getEventById(jwtData: JwtAccess, params: EventEventIdGetPath): Promise<Event> {
    return EventDomainMock.getEventById(jwtData, params);
  }
}

export default new EventDomain();
