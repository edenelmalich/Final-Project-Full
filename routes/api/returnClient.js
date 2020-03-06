const express = require('express');

const router = express.Router();

const ReturnClient = require('../../models/returnClients');

router.get('/', async (req, res) => {
  try {
    const returnClient = await ReturnClient.find();
    res.json(returnClient);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
