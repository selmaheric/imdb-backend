const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = '1023888277477-13214c730re607i4kb750tv490cvuk0s.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/auth/login/google/callback',
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
