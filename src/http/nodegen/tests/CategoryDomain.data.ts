import * as Joi from 'joi';

export const addCategoryBodyAddCategoryPost = { _id: '5e9f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f', name: 'Concert' };

export const pathCategoryId = '6e210bfd-4673-493d-aa23-68305a718710';

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
  categoryGet400: Joi.object({}),
  categoryPost405: Joi.object({}),
  categoryIdDelete400: Joi.object({}),
  categoryIdDelete404: Joi.object({}),
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
  categoryIdGet400: Joi.object({}),
  categoryIdGet404: Joi.object({}),
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
  categoryIdPatch400: Joi.object({}),
  categoryIdPatch404: Joi.object({}),
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
