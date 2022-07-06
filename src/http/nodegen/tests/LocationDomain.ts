import { LocationIdGetPath, LocationIdPatchPath } from '@/http/nodegen/interfaces';
import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestLocationDomain {
  // locationGet
  //
  public static locationGetPath(root: string = baseUrl): string {
    return `${root}/location`;
  }

  public static locationGet(root: string = baseUrl): supertest.Test {
    return request.get(this.locationGetPath(root));
  }

  // locationPost
  //
  public static locationPostPath(root: string = baseUrl): string {
    return `${root}/location`;
  }

  public static locationPost(root: string = baseUrl): supertest.Test {
    return request.post(this.locationPostPath(root));
  }

  // locationIdGet
  //
  public static locationIdGetPath(locationId: LocationIdGetPath['locationId'], root: string = baseUrl): string {
    return `${root}/location/${id}`;
  }

  public static locationIdGet(locationId: LocationIdGetPath['locationId'], root: string = baseUrl): supertest.Test {
    return request.get(this.locationIdGetPath(locationId, root));
  }

  // locationIdPatch
  //
  public static locationIdPatchPath(locationId: LocationIdPatchPath['locationId'], root: string = baseUrl): string {
    return `${root}/location/${id}`;
  }

  public static locationIdPatch(locationId: LocationIdPatchPath['locationId'], root: string = baseUrl): supertest.Test {
    return request.patch(this.locationIdPatchPath(locationId, root));
  }
}
