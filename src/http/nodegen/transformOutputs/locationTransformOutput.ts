export default {
  // getLocations
  getLocations: {
    data: [
      {
        _id: String,
        name: String,
        address: String,
        city: String,
        state: String,
        zip: String,
        country: String,
        longitude: String,
        latitude: String,
      },
    ],
    meta: {
      total: Number,
      lastUpdate: String,
      skip: Number,
      limit: Number,
      orderedBy: String,
    },
  },

  // addLocation
  addLocation: {},

  // getLocationById
  getLocationById: {
    _id: String,
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    longitude: String,
    latitude: String,
  },

  // updateLocation
  updateLocation: {
    _id: String,
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    longitude: String,
    latitude: String,
  },
};
