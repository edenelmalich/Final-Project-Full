const express = require('express');
const router = express.Router();
const NewClient = require('../../models/NewClient');
const { check, validationResult } = require('express-validator');

// add new client
router.get('/', async (req, res) => {
  try {
    const Clients = await NewClient.find();
    res.json(Clients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.post(
  '/',
  [
    check('firstname', 'הכנס שם תקין')
      .not()
      .isEmpty(),
    check('lastname', 'הכנס שם משפחה תקין')
      .not()
      .isEmpty(),
    check('id', 'הכנס תעודת זהות עם 9 ספרות').isLength({ min: 9, max: 9 }),
    check('phone', 'הכנס מספר טלפון תקין').isLength({ min: 10, max: 10 }),

    check('Type', 'בחר סוג מנוי')
      .not()
      .isEmpty(),

    check('Time', 'בחר תקופת מנוי')
      .not()
      .isEmpty(),
    check('Payment', 'בחר סוג תשלום')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      firstname,
      lastname,
      id,
      phone,
      Type,
      Time,
      Payment,
      Total
    } = req.body;
    let Nclient = await NewClient.findOne({ id });
    if (Nclient) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'תעודת זהות זו נמצאת במערכת' }] });
    }
    try {
      Nclient = new NewClient({
        firstname,
        lastname,
        id,
        phone,
        Type,
        Time,
        Payment,
        Total
      });
      await Nclient.save();
      res.json(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
