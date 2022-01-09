const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { v4: uuidv4 } = require('uuid');
const config = require('../config');
const db = require('../utils/database');

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
        const defaultUser = {
          id: uuidv4(),
          first_name: profile.name.givenName,
          last_name: profile.name.familyName,
          email: profile.emails[0].value,
          google_id: profile.id,
        };
        const userDb = await db.connection('users').where({ google_id: defaultUser.google_id }).first();
        if (!userDb) {
          await db.connection('users').insert(defaultUser);
        }
        done(null, userDb || defaultUser);
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
    const userDb = await db.connection('users').where({ id: user.id }).first();
    if (!userDb) {
      const error = {
        name: 'CookieError',
        message: 'Cookie error!',
        statusCode: 401,
        type: 'COOKIE_ERROR',
      };
      done(error, null);
    }
  } catch (error) {
    done(error, null);
  }
  done(null, user);
});
