const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/login', (req, res) => {
  res.send('Login');
});

const successLoginUrl = 'http://localhost:3000/';
const errorLoginUrl = 'http://localhost:3000/login/error';

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'select_account' }),
);

router.get(
  '/login/google/callback',
  passport.authenticate('google', {
    failureMessage: 'Cannot login to Google, please try again later!',
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl,
  }),
  (req, res) => {
    console.log('User: ', req.user);
    res.send('Thank you for signing in!');
  },
);

router.get('/logout', (req, res) => {
  console.log(req.session);
  req.logout();
  console.log(req.session);
  res.status(200).send({});
});

module.exports = router;
