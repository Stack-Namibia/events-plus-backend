export default {
  // getCategories
  getCategories: {
    data: [{ _id: String, name: String }],
    meta: {
      total: Number,
      lastUpdate: String,
      skip: Number,
      limit: Number,
      orderedBy: String,
    },
  },

  // addCategory
  addCategory: {},

  // deleteCategoryById
  deleteCategoryById: {},

  // getCategoryById
  getCategoryById: {
    data: [{ _id: String, name: String }],
    meta: {
      total: Number,
      lastUpdate: String,
      skip: Number,
      limit: Number,
      orderedBy: String,
    },
  },

  // updateCategory
  updateCategory: {
    data: [{ _id: String, name: String }],
    meta: {
      total: Number,
      lastUpdate: String,
      skip: Number,
      limit: Number,
      orderedBy: String,
    },
  },
};
