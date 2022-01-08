const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const config = require('../config');

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: config.GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    ((req, accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }),
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
