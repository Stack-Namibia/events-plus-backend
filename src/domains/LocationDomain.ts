import {
  AddLocationPost,
  LocationGetQuery,
  LocationIdGetPath,
  LocationIdPatchPath,
  LocationModel,
  LocationResponse,
  UpdateLocationPatch,
} from '@/http/nodegen/interfaces';

import { LocationDomainInterface } from '@/http/nodegen/domainInterfaces/LocationDomainInterface';
import { JwtAccess } from '@/http/nodegen/interfaces';

import LocationDomainMock from './__mocks__/LocationDomainMock';

class LocationDomain implements LocationDomainInterface {
  /**
   * Operation ID: getLocations
   * Path middleware used see: LocationDomainInterface.getLocations
   * Summary: undefined
   * Description: get all Locations
   **/
  public async getLocations(jwtData: JwtAccess, query: LocationGetQuery): Promise<LocationResponse> {
    return LocationDomainMock.getLocations(jwtData, query);
  }

  /**
   * Operation ID: addLocation
   * Path middleware used see: LocationDomainInterface.addLocation
   * Summary: undefined
   * Description: add new Location
   **/
  public async addLocation(body: AddLocationPost, jwtData: JwtAccess): Promise<any> {
    return LocationDomainMock.addLocation(body, jwtData);
  }

  /**
   * Operation ID: getLocationById
   * Path middleware used see: LocationDomainInterface.getLocationById
   * Summary: undefined
   * Description: Returns a single Location by id
   **/
  public async getLocationById(jwtData: JwtAccess, params: LocationIdGetPath): Promise<LocationModel> {
    return LocationDomainMock.getLocationById(jwtData, params);
  }

  /**
   * Operation ID: updateLocation
   * Path middleware used see: LocationDomainInterface.updateLocation
   * Summary: Updated Location
   * Description: This can only be done by the logged in Location.
   **/
  public async updateLocation(
    body: UpdateLocationPatch,
    jwtData: JwtAccess,
    params: LocationIdPatchPath
  ): Promise<LocationModel> {
    return LocationDomainMock.updateLocation(body, jwtData, params);
  }
}

export default new LocationDomain();
