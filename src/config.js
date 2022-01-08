const dotenv = require('dotenv');

dotenv.config();

const config = {
  PORT: process.env.PORT || 3001,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 5432,
  DB_NAME: process.env.DB_NAME || 'imdb',
  DB_USERNAME: process.env.DB_USERNAME || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || 'password',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3001/auth/login/google/callback',
  GOOGLE_SUCCESS_LOGIN_URL: process.env.GOOGLE_SUCCESS_LOGIN_URL,
  GOOGLE_UNSUCCESS_LOGIN_URL: process.env.GOOGLE_UNSUCCESS_LOGIN_URL,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
};

module.exports = config;
