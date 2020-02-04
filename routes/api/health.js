const express = require('express');
const router = express.Router();
const Health = require('../../models/Health');

router.get('/', async (req, res) => {
  try {
    const Documents = await Health.find();
    res.json(Documents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// Delete health client
router.delete('/:id', async (req, res) => {
  try {
    await Health.findByIdAndDelete(req.params.id);
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
