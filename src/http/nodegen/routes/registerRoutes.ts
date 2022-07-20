import express from 'express';
import Router from 'express-promise-router';

import { celebrate } from 'celebrate';
import accessTokenMiddleware from '../middleware/accessTokenMiddleware';

import registerValidators from '../validators/registerValidators';
import RegisterDomain from '../../../domains/RegisterDomain';
import registerTransformOutputs from '../transformOutputs/registerTransformOutput';
import GenerateItExpressResponse from '@/http/nodegen/interfaces/GenerateItExpressResponse';

export default function () {
  const router = Router();

  /**
   * Operation ID: registerUser
   * Summary: Register/Sign up a user
   *
   */

  router.post(
    '/user',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      registerValidators.registerUser
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await RegisterDomain.registerUser(req.body, req.jwtData, req),
        200,
        undefined,
        registerTransformOutputs.registerUser
      );
    }
  );

  return router;
}
