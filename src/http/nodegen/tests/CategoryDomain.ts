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
  public static categoryIdDeletePath(id: CategoryIdDeletePath['id'], root: string = baseUrl): string {
    return `${root}/category/${id}`;
  }

  public static categoryIdDelete(id: CategoryIdDeletePath['id'], root: string = baseUrl): supertest.Test {
    return request.delete(this.categoryIdDeletePath(id, root));
  }

  // categoryIdGet
  //
  public static categoryIdGetPath(id: CategoryIdGetPath['id'], root: string = baseUrl): string {
    return `${root}/category/${id}`;
  }

  public static categoryIdGet(id: CategoryIdGetPath['id'], root: string = baseUrl): supertest.Test {
    return request.get(this.categoryIdGetPath(id, root));
  }

  // categoryIdPatch
  //
  public static categoryIdPatchPath(id: CategoryIdPatchPath['id'], root: string = baseUrl): string {
    return `${root}/category/${id}`;
  }

  public static categoryIdPatch(id: CategoryIdPatchPath['id'], root: string = baseUrl): supertest.Test {
    return request.patch(this.categoryIdPatchPath(id, root));
  }
}
