const express = require('express');

const {
  moviesRouter,
  authRouter,
} = require('./controllers');

const config = require('./config');

const app = express();
const port = config.PORT;

app.use('/auth', authRouter);
app.use('/movies', moviesRouter);

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
