import express from 'express';
import Router from 'express-promise-router';

import { celebrate } from 'celebrate';
import accessTokenMiddleware from '../middleware/accessTokenMiddleware';

import ticketValidators from '../validators/ticketValidators';
import TicketDomain from '../../../domains/TicketDomain';
import ticketTransformOutputs from '../transformOutputs/ticketTransformOutput';
import GenerateItExpressResponse from '@/http/nodegen/interfaces/GenerateItExpressResponse';

export default function () {
  const router = Router();

  /**
   * Operation ID: getTickets
   *
   * Description: get all Tickets
   */

  router.get(
    '/',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await TicketDomain.getTickets(req.jwtData),
        200,
        undefined,
        ticketTransformOutputs.getTickets
      );
    }
  );

  /**
   * Operation ID: addTicket
   *
   * Description: add new Ticket
   */

  router.post(
    '/',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      ticketValidators.addTicket
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await TicketDomain.addTicket(req.body, req.jwtData),
        200,
        undefined,
        ticketTransformOutputs.addTicket
      );
    }
  );

  /**
   * Operation ID: getTicketById
   *
   * Description: Returns a single Ticket by id
   */

  router.get(
    '/:id',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      ticketValidators.getTicketById
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await TicketDomain.getTicketById(req.jwtData, req.params),
        200,
        undefined,
        ticketTransformOutputs.getTicketById
      );
    }
  );

  return router;
}
