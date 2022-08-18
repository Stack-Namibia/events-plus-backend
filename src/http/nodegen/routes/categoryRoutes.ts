import express from 'express';
import Router from 'express-promise-router';

import { celebrate } from 'celebrate';
import accessTokenMiddleware from '../middleware/accessTokenMiddleware';

import categoryValidators from '../validators/categoryValidators';
import CategoryDomain from '../../../domains/CategoryDomain';
import categoryTransformOutputs from '../transformOutputs/categoryTransformOutput';
import GenerateItExpressResponse from '@/http/nodegen/interfaces/GenerateItExpressResponse';

export default function () {
  const router = Router();

  /**
   * Operation ID: getCategories
   *
   * Description: get all Categories
   */

  router.get(
    '/',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      categoryValidators.getCategories
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await CategoryDomain.getCategories(req.jwtData, req.query),
        200,
        undefined,
        categoryTransformOutputs.getCategories
      );
    }
  );

  /**
   * Operation ID: addCategory
   *
   * Description: add new category
   */

  router.post(
    '/',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      categoryValidators.addCategory
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await CategoryDomain.addCategory(req.body, req.jwtData),
        200,
        undefined,
        categoryTransformOutputs.addCategory
      );
    }
  );

  /**
   * Operation ID: deleteCategoryById
   *
   * Description: Delete Category based on path parameter
   */

  router.delete(
    '/:id',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      categoryValidators.deleteCategoryById
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await CategoryDomain.deleteCategoryById(req.jwtData, req.params),
        200,
        undefined,
        categoryTransformOutputs.deleteCategoryById
      );
    }
  );

  /**
   * Operation ID: getCategoryById
   *
   * Description: Returns a single category by id
   */

  router.get(
    '/:id',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      categoryValidators.getCategoryById
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await CategoryDomain.getCategoryById(req.jwtData, req.params),
        200,
        undefined,
        categoryTransformOutputs.getCategoryById
      );
    }
  );

  /**
   * Operation ID: updateCategory
   * Summary: Updated Category
   * Description: This can only be done by the logged in Category.
   */

  router.patch(
    '/:id',
    accessTokenMiddleware([
      'Authorization',
    ]) /* Validate request security tokens */,

    celebrate(
      categoryValidators.updateCategory
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await CategoryDomain.updateCategory(req.body, req.jwtData, req.params),
        200,
        undefined,
        categoryTransformOutputs.updateCategory
      );
    }
  );

  return router;
}
