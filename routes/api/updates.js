const express = require('express');
const { check, validationResult } = require('express-validator');
const Updates = require('../../models/Updates');
const router = express.Router();

router.post(
  '/',
  [
    check('firstname', 'הכנס שם תקין')
      .not()
      .isEmpty(),
    check('lastname', 'הכנס שם משפחה תקין')
      .not()
      .isEmpty(),
    check('update', 'הכנס הודעה תקינה')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { firstname, lastname, update } = req.body;
    try {
      updates = new Updates({
        firstname,
        lastname,
        update
      });
      await updates.save();
      res.json(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Error Server');
    }
  }
);

module.exports = router;
