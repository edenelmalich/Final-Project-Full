const express = require('express');

const router = express.Router();
const User = require('../../models/Users');
const { check, validationResult } = require('express-validator');

router.post(
  '/',
  [check('email', 'הכנס דואר אלקטרוני תקין').isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { _id, email } = req.body;
    try {
      let user = await User.findOne({ _id });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: 'משתמש לא קיים' }] });
      }
      let CheckEmail = await User.findOne({ email });
      if (CheckEmail) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'דואר אלקטרוני זה קיים במערכת' }] });
      }
      user.update({
        email
      });
      user.email = email;
      await user.save();
      res.json(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
