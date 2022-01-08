const auth = require('./auth');
const shows = require('./shows');
const users = require('./users');

module.exports = {
  showsRouter: shows,
  authRouter: auth,
  usersRouter: users,
};
