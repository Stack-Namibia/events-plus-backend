import { CategoryIdDeletePath, CategoryIdGetPath, CategoryIdPatchPath } from '@/http/nodegen/interfaces';
import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestCategoryDomain {
  // categoryGet
  //
  public static categoryGetPath(root: string = baseUrl): string {
    return `${root}/category`;
  }

  public static categoryGet(root: string = baseUrl): supertest.Test {
    return request.get(this.categoryGetPath(root));
  }

  // categoryPost
  //
  public static categoryPostPath(root: string = baseUrl): string {
    return `${root}/category`;
  }

  public static categoryPost(root: string = baseUrl): supertest.Test {
    return request.post(this.categoryPostPath(root));
  }

  // categoryIdDelete
  //
  public static categoryIdDeletePath(categoryId: CategoryIdDeletePath['categoryId'], root: string = baseUrl): string {
    return `${root}/category/${id}`;
  }

  public static categoryIdDelete(
    categoryId: CategoryIdDeletePath['categoryId'],
    root: string = baseUrl
  ): supertest.Test {
    return request.delete(this.categoryIdDeletePath(categoryId, root));
  }

  // categoryIdGet
  //
  public static categoryIdGetPath(categoryId: CategoryIdGetPath['categoryId'], root: string = baseUrl): string {
    return `${root}/category/${id}`;
  }

  public static categoryIdGet(categoryId: CategoryIdGetPath['categoryId'], root: string = baseUrl): supertest.Test {
    return request.get(this.categoryIdGetPath(categoryId, root));
  }

  // categoryIdPatch
  //
  public static categoryIdPatchPath(categoryId: CategoryIdPatchPath['categoryId'], root: string = baseUrl): string {
    return `${root}/category/${id}`;
  }

  public static categoryIdPatch(categoryId: CategoryIdPatchPath['categoryId'], root: string = baseUrl): supertest.Test {
    return request.patch(this.categoryIdPatchPath(categoryId, root));
  }
}
