const mongoose = require('mongoose');

const NclientSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  id: {
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
  Total: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now(new Date('<YYYY-mm-dd>'))
  }
});
module.exports = NewClient = mongoose.model('Nclient', NclientSchema);
