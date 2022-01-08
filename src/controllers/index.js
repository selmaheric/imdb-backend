const auth = require('./auth');
const movies = require('./movies');
const users = require('./users');

module.exports = {
  moviesRouter: movies,
  authRouter: auth,
  usersRouter: users,
};
