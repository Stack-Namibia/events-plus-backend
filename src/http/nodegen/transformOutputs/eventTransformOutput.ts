export default {
  // getEvents
  getEvents: {
    data: [
      {
        _id: String,
        name: String,
        description: String,
        host: [
          { _id: String, name: String, email: String, phoneNumber: String },
        ],
        category: [{ _id: String, name: String }],
        eventDate: String,
        endTime: String,
        location: {
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
        attendance: Number,
        tickets: [
          { _id: String, type: String, price: Number, quantity: Number },
        ],
        images: [String],
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

  // addEvent
  addEvent: {
    _id: String,
    name: String,
    description: String,
    host: [{ _id: String, name: String, email: String, phoneNumber: String }],
    category: [{ _id: String, name: String }],
    eventDate: String,
    endTime: String,
    location: {
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
    attendance: Number,
    tickets: [{ _id: String, type: String, price: Number, quantity: Number }],
    images: [String],
  },

  // deleteEventById
  deleteEventById: {},

  // getEventById
  getEventById: {
    _id: String,
    name: String,
    description: String,
    host: [{ _id: String, name: String, email: String, phoneNumber: String }],
    category: [{ _id: String, name: String }],
    eventDate: String,
    endTime: String,
    location: {
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
    attendance: Number,
    tickets: [{ _id: String, type: String, price: Number, quantity: Number }],
    images: [String],
  },
};
