import * as Joi from 'joi';

export const getCategoriesQueryLimit = 8;

export const getCategoriesQuerySkip = 83;

export const getCategoriesQueryMatch = 'sr93Zr6MBkNps4WydO';

export const getCategoriesQuerySort = 'q4ky4UuFjTawtwR';

export const addCategoryBodyAddCategoryPost = { _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f', name: 'Concert' };

export const pathId = '6e210bfd-4673-493d-aa23-68305a718710';

export const updateCategoryBodyUpdateCategoryPatch = { _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f', name: 'Concert' };

export const validationSchemas: Record<string, Joi.AnySchema> = {
  categoryGet200: Joi.object({
    data: Joi.array().items(
      Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
    ),
    meta: Joi.object({
      total: Joi.number().allow(null),
      lastUpdate: Joi.string().allow('').allow(null),
      skip: Joi.number().allow(null),
      limit: Joi.number().allow(null),
      orderedBy: Joi.string().allow('').allow(null),
    }).allow(null),
  }).allow(null),
  categoryGetSuccess: Joi.object({
    data: Joi.array().items(
      Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
    ),
    meta: Joi.object({
      total: Joi.number().allow(null),
      lastUpdate: Joi.string().allow('').allow(null),
      skip: Joi.number().allow(null),
      limit: Joi.number().allow(null),
      orderedBy: Joi.string().allow('').allow(null),
    }).allow(null),
  }).allow(null),
  categoryGet401: Joi.object({}),
  categoryGet403: Joi.object({}),
  categoryGet404: Joi.object({}),
  categoryGet500: Joi.object({}),
  categoryPost401: Joi.object({}),
  categoryPost403: Joi.object({}),
  categoryPost422: Joi.object({}),
  categoryPost500: Joi.object({}),
  categoryIdDelete201: Joi.object({}),
  categoryIdDeleteSuccess: Joi.object({}),
  categoryIdDelete401: Joi.object({}),
  categoryIdDelete403: Joi.object({}),
  categoryIdDelete404: Joi.object({}),
  categoryIdDelete500: Joi.object({}),
  categoryIdGet200: Joi.object({
    data: Joi.array().items(
      Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
    ),
    meta: Joi.object({
      total: Joi.number().allow(null),
      lastUpdate: Joi.string().allow('').allow(null),
      skip: Joi.number().allow(null),
      limit: Joi.number().allow(null),
      orderedBy: Joi.string().allow('').allow(null),
    }).allow(null),
  }).allow(null),
  categoryIdGetSuccess: Joi.object({
    data: Joi.array().items(
      Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
    ),
    meta: Joi.object({
      total: Joi.number().allow(null),
      lastUpdate: Joi.string().allow('').allow(null),
      skip: Joi.number().allow(null),
      limit: Joi.number().allow(null),
      orderedBy: Joi.string().allow('').allow(null),
    }).allow(null),
  }).allow(null),
  categoryIdGet401: Joi.object({}),
  categoryIdGet403: Joi.object({}),
  categoryIdGet404: Joi.object({}),
  categoryIdGet500: Joi.object({}),
  categoryIdPatch200: Joi.object({
    data: Joi.array().items(
      Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
    ),
    meta: Joi.object({
      total: Joi.number().allow(null),
      lastUpdate: Joi.string().allow('').allow(null),
      skip: Joi.number().allow(null),
      limit: Joi.number().allow(null),
      orderedBy: Joi.string().allow('').allow(null),
    }).allow(null),
  }).allow(null),
  categoryIdPatchSuccess: Joi.object({
    data: Joi.array().items(
      Joi.object({ _id: Joi.string().allow('').allow(null), name: Joi.string().allow('').allow(null) }).allow(null)
    ),
    meta: Joi.object({
      total: Joi.number().allow(null),
      lastUpdate: Joi.string().allow('').allow(null),
      skip: Joi.number().allow(null),
      limit: Joi.number().allow(null),
      orderedBy: Joi.string().allow('').allow(null),
    }).allow(null),
  }).allow(null),
  categoryIdPatch401: Joi.object({}),
  categoryIdPatch403: Joi.object({}),
  categoryIdPatch404: Joi.object({}),
  categoryIdPatch422: Joi.object({}),
  categoryIdPatch500: Joi.object({}),
};

/**
 * Default, basic validator which checks if the schema returned matches
 * the schema defined in the API spec.
 * This is just a starting point for the tests, but this should be replaced by more specific,
 * targeted test cases.
 *
 * @param {string}  responseKey  The response key
 * @param {any}     schema       The schema
 */
export const responseValidator = (responseKey: string, schema: any): { error?: Joi.ValidationError } => {
  return validationSchemas[responseKey].validate(schema);
};
