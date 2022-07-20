export default {
  // getTickets
  getTickets: {
    data: [{ _id: String, type: String, price: Number, quantity: Number }],
    meta: {
      total: Number,
      lastUpdate: String,
      skip: Number,
      limit: Number,
      orderedBy: String,
    },
  },

  // addTicket
  addTicket: { _id: String, type: String, price: Number, quantity: Number },

  // getTicketById
  getTicketById: {
    data: [{ _id: String, type: String, price: Number, quantity: Number }],
    meta: {
      total: Number,
      lastUpdate: String,
      skip: Number,
      limit: Number,
      orderedBy: String,
    },
  },
};
