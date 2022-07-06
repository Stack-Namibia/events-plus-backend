import {
  AddLocationPost,
  LocationIdGetPath,
  LocationIdPatchPath,
  LocationModel,
  LocationResponse,
  UpdateLocationPatch,
} from '@/http/nodegen/interfaces';
import { JwtAccess } from '@/http/nodegen/interfaces';

export interface LocationDomainInterface {
  /**
   * Operation ID: getLocations
   * Summary: undefined
   * Description: get all Locations
   * Security header(s): ['Authorization']
   **/
  getLocations(jwtData: JwtAccess): Promise<LocationResponse>;

  /**
   * Operation ID: addLocation
   * Summary: undefined
   * Description: add new Location
   * Security header(s): ['Authorization']
   **/
  addLocation(body: AddLocationPost, jwtData: JwtAccess): Promise<any>;

  /**
   * Operation ID: getLocationById
   * Summary: undefined
   * Description: Returns a single Location by id
   * Security header(s): ['Authorization']
   **/
  getLocationById(
    jwtData: JwtAccess,
    params: LocationIdGetPath
  ): Promise<LocationModel>;

  /**
   * Operation ID: updateLocation
   * Summary: Updated Location
   * Description: This can only be done by the logged in Location.
   * Security header(s): ['Authorization']
   **/
  updateLocation(
    body: UpdateLocationPatch,
    jwtData: JwtAccess,
    params: LocationIdPatchPath
  ): Promise<LocationModel>;
}
