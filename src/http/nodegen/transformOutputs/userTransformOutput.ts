export default {
  // deleteUser
  deleteUser: {},

  // getUsers
  getUsers: {
    _id: String,
    first_name: String,
    last_name: String,
    email: String,
    date_of_birth: String,
    password: String,
    auth_token: String,
    favorites: {
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
  },

  // updateUser
  updateUser: {
    _id: String,
    first_name: String,
    last_name: String,
    email: String,
    date_of_birth: String,
    password: String,
    auth_token: String,
    favorites: {
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
  },

  // createUser
  createUser: {},

  // login
  login: {},

  // logoutUser
  logoutUser: {},

  // getUserById
  getUserById: {
    _id: String,
    first_name: String,
    last_name: String,
    email: String,
    date_of_birth: String,
    password: String,
    auth_token: String,
    favorites: {
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
  },
};
