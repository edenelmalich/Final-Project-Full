const mongoose = require('mongoose');

const Exercises = new mongoose.Schema({
  exercisesList: {
    type: Array,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = ExercisesSchema = mongoose.model('Exercises', Exercises);
