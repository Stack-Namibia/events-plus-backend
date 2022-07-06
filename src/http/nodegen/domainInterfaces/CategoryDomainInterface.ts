import {
  AddCategoryPost,
  CategoryIdDeletePath,
  CategoryIdGetPath,
  CategoryIdPatchPath,
  EventCategoryResponse,
  UpdateCategoryPatch,
} from '@/http/nodegen/interfaces';
import { JwtAccess } from '@/http/nodegen/interfaces';

export interface CategoryDomainInterface {
  /**
   * Operation ID: getCategories
   * Summary: undefined
   * Description: get all Categories
   * Security header(s): ['Authorization']
   **/
  getCategories(jwtData: JwtAccess): Promise<EventCategoryResponse>;

  /**
   * Operation ID: addCategory
   * Summary: undefined
   * Description: add new category
   * Security header(s): ['Authorization']
   **/
  addCategory(body: AddCategoryPost, jwtData: JwtAccess): Promise<any>;

  /**
   * Operation ID: deleteCategoryById
   * Summary: undefined
   * Description: Delete Category based on path parameter
   * Security header(s): ['Authorization']
   **/
  deleteCategoryById(
    jwtData: JwtAccess,
    params: CategoryIdDeletePath
  ): Promise<any>;

  /**
   * Operation ID: getCategoryById
   * Summary: undefined
   * Description: Returns a single category by id
   * Security header(s): ['Authorization']
   **/
  getCategoryById(
    jwtData: JwtAccess,
    params: CategoryIdGetPath
  ): Promise<EventCategoryResponse>;

  /**
   * Operation ID: updateCategory
   * Summary: Updated Category
   * Description: This can only be done by the logged in Category.
   * Security header(s): ['Authorization']
   **/
  updateCategory(
    body: UpdateCategoryPatch,
    jwtData: JwtAccess,
    params: CategoryIdPatchPath
  ): Promise<EventCategoryResponse>;
}
