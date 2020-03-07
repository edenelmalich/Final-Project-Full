const express = require('express');
const router = express.Router();

const Notifications = require('../../models/Notifications');

// get all notifications
router.get('/', async (req, res) => {
  try {
    const noti = await Notifications.find();
    res.json(noti);
  } catch (err) {
    console.error(err.message);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    await Notifications.findByIdAndDelete(req.params.id);
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// update
router.post('/', async (req, res) => {
  const { _id, readMessage } = req.body;
  try {
    let noti = await Notifications.findOne({ _id });

    noti.updateOne({
      readMessage
    });
    noti.readMessage = readMessage;
    await noti.save();
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
