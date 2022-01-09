const { UNAUTHORIZED_ERROR } = require('../utils/errors');

const authenticate = (req, res, next) => {
  if (!req.user) {
    next(UNAUTHORIZED_ERROR);
  }
  next();
};

module.exports = {
  authenticate,
};
