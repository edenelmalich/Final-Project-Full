const mongoose = require('mongoose');

const Health = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  documentsText: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date
  }
});
module.exports = healthSchema = mongoose.model('healthDocuments', Health);
