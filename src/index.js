const express = require('express');
const bodyParser = require('body-parser');

const {
  moviesRouter,
  authRouter,
} = require('./controllers');
const config = require('./config');

const port = config.PORT;

/**
 * Setup express
 */
const app = express();
app.use(bodyParser.json({ limit: 100 }));
app.use('/auth', authRouter);
app.use('/movies', moviesRouter);
app.get('/ping', (req, res) => res.send('pong'));

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log('Error', err);
  res.status(err.statusCode || 500);
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
