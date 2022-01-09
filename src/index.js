const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const passport = require('passport');
require('./middlewares/passport');

const {
  showsRouter,
  authRouter,
  usersRouter,
} = require('./controllers');
const config = require('./config');

const port = config.PORT;

/**
 * Setup express
 */
const app = express();
app.use(bodyParser.json({ limit: 100 }));

app.use(
  cors({
    origin: config.FRONTEND_URL,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);

app.use(
  cookieSession({
    name: 'session',
    keys: [config.COOKIE_SECRET],
    maxAge: config.COOKIE_DURATION,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/shows', showsRouter);
app.get('/ping', (req, res) => res.send('pong'));

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log('Error', err);
  res.status(err.statusCode || 500);
  if (err.type === 'COOKIE_ERROR') {
    req.logout();
  }
  return res.json({
    name: err.name || 'Server error',
    message: err.message || 'Server error',
    code: err.statusCode || 500,
    type: err.type || 'SERVER_ERROR',
    data: err.errors,
  });
});

/**
 * Run server
 */
app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
