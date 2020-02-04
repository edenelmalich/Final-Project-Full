const mongoose = require('mongoose');

const UpdateSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  update: {
    type: String,
    required: true
  },
  readMessage: {
    type: false,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Updates = mongoose.model('update', UpdateSchema);
