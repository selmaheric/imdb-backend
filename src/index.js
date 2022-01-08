const express = require('express');
const bodyParser = require('body-parser');

const {
  moviesRouter,
  authRouter,
} = require('./controllers');

const config = require('./config');

const app = express();

app.use(bodyParser.json({ limit: 100 }));
const port = config.PORT;

app.use('/auth', authRouter);
app.use('/movies', moviesRouter);

app.get('/ping', (req, res) => res.send('pong'));

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

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
