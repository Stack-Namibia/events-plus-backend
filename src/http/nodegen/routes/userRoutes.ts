import express from 'express';
import Router from 'express-promise-router';

import { celebrate } from 'celebrate';
import accessTokenMiddleware from '../middleware/accessTokenMiddleware';

import userValidators from '../validators/userValidators';
import UserDomain from '../../../domains/UserDomain';
import userTransformOutputs from '../transformOutputs/userTransformOutput';
import GenerateItExpressResponse from '@/http/nodegen/interfaces/GenerateItExpressResponse';

export default function () {
  const router = Router();

  /**
   * Operation ID: getUsers
   * Summary: Get all  user
   * Description: get all users from the server.
   */

  router.get(
    '/',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      userValidators.getUsers
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await UserDomain.getUsers(req.jwtData, req.query),
        200,
        undefined,
        userTransformOutputs.getUsers
      );
    }
  );

  /**
   * Operation ID: createUser
   * Summary: Create user
   * Description: This can only be done by the logged in user.
   */

  router.post(
    '/',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      userValidators.createUser
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await UserDomain.createUser(req.body, req.jwtData),
        200,
        undefined,
        userTransformOutputs.createUser
      );
    }
  );

  /**
   * Operation ID: deleteUser
   * Summary: Delete user
   * Description: This can only be done by the logged in user.
   */

  router.delete(
    '/:id',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      userValidators.deleteUser
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await UserDomain.deleteUser(req.jwtData, req.params),
        200,
        undefined,
        userTransformOutputs.deleteUser
      );
    }
  );

  /**
   * Operation ID: getUserById
   *
   * Description: Get user by id
   */

  router.get(
    '/:id',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      userValidators.getUserById
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await UserDomain.getUserById(req.jwtData, req.params),
        200,
        undefined,
        userTransformOutputs.getUserById
      );
    }
  );

  /**
   * Operation ID: updateUser
   * Summary: Updated user
   * Description: This can only be done by the logged in user.
   */

  router.patch(
    '/:id',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      userValidators.updateUser
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await UserDomain.updateUser(req.body, req.jwtData, req.params),
        200,
        undefined,
        userTransformOutputs.updateUser
      );
    }
  );

  return router;
}
