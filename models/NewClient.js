const mongoose = require('mongoose');

const NclientSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  clientId: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  Time: {
    type: String,
    required: true
  },
  Payment: {
    type: String,
    required: true
  },
  readMessage: {
    type: String
  },
  subject: {
    type: String
  },
  Total: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now(new Date('<YYYY-mm-dd>'))
  }
});
module.exports = NewClient = mongoose.model('Nclient', NclientSchema);
