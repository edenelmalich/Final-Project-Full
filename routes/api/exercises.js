const express = require('express');
const Exercises = require('../../models/Exercises');
const { check, validationResult } = require('express-validator');
const router = express.Router;

router.post(
  '/',
  [
    check('exercisesList', 'חייב לבחור תרגילים כדי לשלוח')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { exercisesList } = req.body;
    try {
      Exercises({
        exercisesList
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
