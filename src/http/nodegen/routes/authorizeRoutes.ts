import express from 'express';
import Router from 'express-promise-router';

import accessTokenMiddleware from '../middleware/accessTokenMiddleware';

import authorizeValidators from '../validators/authorizeValidators';
import AuthorizeDomain from '../../../domains/AuthorizeDomain';
import authorizeTransformOutputs from '../transformOutputs/authorizeTransformOutput';
import GenerateItExpressResponse from '@/http/nodegen/interfaces/GenerateItExpressResponse';

export default function () {
  const router = Router();

  /**
   * Operation ID: authorize
   * Summary: Login/Sign in user
   * Description: Exchange a firebase token with an api token
   */

  router.get(
    '/',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await AuthorizeDomain.authorize(req.jwtData, req),
        200,
        undefined,
        authorizeTransformOutputs.authorize
      );
    }
  );

  return router;
}
