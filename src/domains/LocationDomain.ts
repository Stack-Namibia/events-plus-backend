import {
  AddLocationPost,
  LocationGetQuery,
  LocationIdGetPath,
  LocationIdPatchPath,
  LocationResponse,
  UpdateLocationPatch,
} from '@/http/nodegen/interfaces';

import { LocationDomainInterface } from '@/http/nodegen/domainInterfaces/LocationDomainInterface';
import { JwtAccess } from '@/http/nodegen/interfaces';
import { LocationModel, LocationSchemaType } from '@/database/models/locations.model';
import { formatDocument } from '@/shared/utils/formatter/response';

class LocationDomain implements LocationDomainInterface {
  /**
   * Operation ID: getLocations
   * Path middleware used see: LocationDomainInterface.getLocations
   * Summary: undefined
   * Description: get all Locations
   **/
  public async getLocations(jwtData: JwtAccess, query: LocationGetQuery): Promise<LocationResponse> {
    const locations = await LocationModel.find({ ...query });
    const total = await LocationModel.countDocuments({});
    return {
      data: locations.map((location) => formatDocument(location)),
      meta: {
        total,
      },
    };
  }

  /**
   * Operation ID: addLocation
   * Path middleware used see: LocationDomainInterface.addLocation
   * Summary: undefined
   * Description: add new Location
   **/
  public async addLocation(body: AddLocationPost, jwtData: JwtAccess): Promise<LocationSchemaType> {
    const location = new LocationModel({ ...(body as any) });
    await location.save();
    return location;
  }

  /**
   * Operation ID: getLocationById
   * Path middleware used see: LocationDomainInterface.getLocationById
   * Summary: undefined
   * Description: Returns a single Location by id
   **/
  public async getLocationById(jwtData: JwtAccess, params: LocationIdGetPath): Promise<LocationSchemaType> {
    const location = await LocationModel.findById(params.id);

    if (!location) {
      return Promise.reject('Location not found');
    }
    return location;
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
  ): Promise<LocationSchemaType> {
    const location = await LocationModel.findByIdAndUpdate(params.id, { ...(body as any) }, { new: true });
    return location;
  }
}

export default new LocationDomain();
