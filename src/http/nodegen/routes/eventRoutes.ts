import express from 'express';
import Router from 'express-promise-router';

import { celebrate } from 'celebrate';
import accessTokenMiddleware from '../middleware/accessTokenMiddleware';

import eventValidators from '../validators/eventValidators';
import EventDomain from '../../../domains/EventDomain';
import eventTransformOutputs from '../transformOutputs/eventTransformOutput';
import GenerateItExpressResponse from '@/http/nodegen/interfaces/GenerateItExpressResponse';

export default function () {
  const router = Router();

  /**
   * Operation ID: getEvents
   *
   * Description: get all events
   */

  router.get(
    '/',

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await EventDomain.getEvents(),
        200,
        undefined,
        eventTransformOutputs.getEvents
      );
    }
  );

  /**
   * Operation ID: addEvent
   *
   * Description: add new event
   */

  router.post(
    '/',

    celebrate(
      eventValidators.addEvent
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await EventDomain.addEvent(req.body),
        200,
        undefined,
        eventTransformOutputs.addEvent
      );
    }
  );

  /**
   * Operation ID: deleteEventById
   *
   * Description: Delete event based on path parameter
   */

  router.delete(
    '/:eventId',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      eventValidators.deleteEventById
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await EventDomain.deleteEventById(req.jwtData, req.params),
        200,
        undefined,
        eventTransformOutputs.deleteEventById
      );
    }
  );

  /**
   * Operation ID: getEventById
   *
   * Description: Returns a single event by id
   */

  router.get(
    '/:eventId',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      eventValidators.getEventById
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await EventDomain.getEventById(req.jwtData, req.params),
        200,
        undefined,
        eventTransformOutputs.getEventById
      );
    }
  );

  return router;
}
