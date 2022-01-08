const auth = require('./auth');
const movies = require('./movies');

module.exports = {
  moviesRouter: movies,
  authRouter: auth,
};
