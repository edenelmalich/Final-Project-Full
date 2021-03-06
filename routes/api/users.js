const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../../models/Users');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post(
  '/',
  [
    check('Name', 'הכנס שם תקין')
      .not()
      .isEmpty(),
    check('email', 'הכנס דואר אלקטרוני תקין').isEmail(),
    check('password', 'הכנס סיסמה עם 6 תווים או יותר').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { Name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'משתמש קיים' }] });
      }

      user = new User({
        Name,
        email,
        password
      });
      //Encrypt The password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
      // Making Web Token

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
