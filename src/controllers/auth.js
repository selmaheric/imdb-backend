const express = require('express');
const passport = require('passport');
const config = require('../config');

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'select_account' }),
);

router.get(
  '/login/google/callback',
  passport.authenticate('google', {
    failureMessage: 'Cannot login to Google, please try again later!',
    failureRedirect: config.GOOGLE_UNSUCCESS_LOGIN_URL,
    successRedirect: config.GOOGLE_SUCCESS_LOGIN_URL,
  }),
  (req, res) => {
    console.log('User: ', req.user);
    res.send('Thank you for signing in!');
  },
);

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).send({});
});

module.exports = router;
