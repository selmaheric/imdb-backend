const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { COOKIE_ERROR } = require('../utils/errors');
const config = require('../config');
const userService = require('../services/users.service');

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: config.GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    (async (req, accessToken, refreshToken, profile, done) => {
      try {
        const user = await userService.upsertUserByGoogleId(profile);
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }),
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  try {
    const userDb = await userService.getUserById({ idUser: user.id });
    if (!userDb) {
      done(COOKIE_ERROR, null);
    }
  } catch (error) {
    done(error, null);
  }
  done(null, user);
});
