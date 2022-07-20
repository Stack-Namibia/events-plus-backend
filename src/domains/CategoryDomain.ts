import {
  AddCategoryPost,
  CategoryGetQuery,
  CategoryIdDeletePath,
  CategoryIdGetPath,
  CategoryIdPatchPath,
  EventCategoryResponse,
  UpdateCategoryPatch,
} from '@/http/nodegen/interfaces';

import { CategoryDomainInterface } from '@/http/nodegen/domainInterfaces/CategoryDomainInterface';
import { JwtAccess } from '@/http/nodegen/interfaces';

import CategoryDomainMock from './__mocks__/CategoryDomainMock';

class CategoryDomain implements CategoryDomainInterface {
  /**
   * Operation ID: getCategories
   * Path middleware used see: CategoryDomainInterface.getCategories
   * Summary: undefined
   * Description: get all Categories
   **/
  public async getCategories(jwtData: JwtAccess, query: CategoryGetQuery): Promise<EventCategoryResponse> {
    return CategoryDomainMock.getCategories(jwtData, query);
  }

  /**
   * Operation ID: addCategory
   * Path middleware used see: CategoryDomainInterface.addCategory
   * Summary: undefined
   * Description: add new category
   **/
  public async addCategory(body: AddCategoryPost, jwtData: JwtAccess): Promise<any> {
    return CategoryDomainMock.addCategory(body, jwtData);
  }

  /**
   * Operation ID: deleteCategoryById
   * Path middleware used see: CategoryDomainInterface.deleteCategoryById
   * Summary: undefined
   * Description: Delete Category based on path parameter
   **/
  public async deleteCategoryById(jwtData: JwtAccess, params: CategoryIdDeletePath): Promise<any> {
    return CategoryDomainMock.deleteCategoryById(jwtData, params);
  }

  /**
   * Operation ID: getCategoryById
   * Path middleware used see: CategoryDomainInterface.getCategoryById
   * Summary: undefined
   * Description: Returns a single category by id
   **/
  public async getCategoryById(jwtData: JwtAccess, params: CategoryIdGetPath): Promise<EventCategoryResponse> {
    return CategoryDomainMock.getCategoryById(jwtData, params);
  }

  /**
   * Operation ID: updateCategory
   * Path middleware used see: CategoryDomainInterface.updateCategory
   * Summary: Updated Category
   * Description: This can only be done by the logged in Category.
   **/
  public async updateCategory(
    body: UpdateCategoryPatch,
    jwtData: JwtAccess,
    params: CategoryIdPatchPath
  ): Promise<EventCategoryResponse> {
    return CategoryDomainMock.updateCategory(body, jwtData, params);
  }
}

export default new CategoryDomain();
