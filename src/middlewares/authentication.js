const authenticate = (req, res, next) => {
  if (!req.user) {
    next({
      name: 'UnAuthorizedError',
      message: 'Unauthorized',
      statusCode: 401,
      type: 'AUTH_INVALID',
    });
  }
  next();
};

module.exports = {
  authenticate,
};
