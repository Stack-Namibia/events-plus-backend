export default {
  // getUsers
  getUsers: {
    data: [
      {
        _id: String,
        first_name: String,
        last_name: String,
        mobile: String,
        gender: String,
        email: String,
        date_of_birth: String,
        profilePic: String,
        firebaseToken: String,
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

  // createUser
  createUser: {},

  // deleteUser
  deleteUser: {},

  // getUserById
  getUserById: {
    _id: String,
    first_name: String,
    last_name: String,
    mobile: String,
    gender: String,
    email: String,
    date_of_birth: String,
    profilePic: String,
    firebaseToken: String,
  },

  // updateUser
  updateUser: {
    _id: String,
    first_name: String,
    last_name: String,
    mobile: String,
    gender: String,
    email: String,
    date_of_birth: String,
    profilePic: String,
    firebaseToken: String,
  },
};
