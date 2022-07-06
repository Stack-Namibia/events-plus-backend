import express from 'express';
import Router from 'express-promise-router';

import { celebrate } from 'celebrate';
import accessTokenMiddleware from '../middleware/accessTokenMiddleware';

import locationValidators from '../validators/locationValidators';
import LocationDomain from '../../../domains/LocationDomain';
import locationTransformOutputs from '../transformOutputs/locationTransformOutput';
import GenerateItExpressResponse from '@/http/nodegen/interfaces/GenerateItExpressResponse';

export default function () {
  const router = Router();

  /**
   * Operation ID: getLocations
   *
   * Description: get all Locations
   */

  router.get(
    '/',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await LocationDomain.getLocations(req.jwtData),
        200,
        undefined,
        locationTransformOutputs.getLocations
      );
    }
  );

  /**
   * Operation ID: addLocation
   *
   * Description: add new Location
   */

  router.post(
    '/',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      locationValidators.addLocation
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await LocationDomain.addLocation(req.body, req.jwtData),
        200,
        undefined,
        locationTransformOutputs.addLocation
      );
    }
  );

  /**
   * Operation ID: getLocationById
   *
   * Description: Returns a single Location by id
   */

  router.get(
    '/:id',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      locationValidators.getLocationById
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await LocationDomain.getLocationById(req.jwtData, req.params),
        200,
        undefined,
        locationTransformOutputs.getLocationById
      );
    }
  );

  /**
   * Operation ID: updateLocation
   * Summary: Updated Location
   * Description: This can only be done by the logged in Location.
   */

  router.patch(
    '/:id',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      locationValidators.updateLocation
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await LocationDomain.updateLocation(req.body, req.jwtData, req.params),
        200,
        undefined,
        locationTransformOutputs.updateLocation
      );
    }
  );

  return router;
}
