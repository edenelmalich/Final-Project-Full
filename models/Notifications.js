const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  readMessage: {
    type: Boolean,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = notifications = mongoose.model(
  'notification',
  notificationSchema
);
