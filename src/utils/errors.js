const UNAUTHORIZED_ERROR = {
  name: 'UnAuthorizedError',
  message: 'Unauthorized',
  statusCode: 401,
  type: 'AUTH_INVALID',
};

const COOKIE_ERROR = {
  name: 'CookieError',
  message: 'Cookie error!',
  statusCode: 401,
  type: 'COOKIE_ERROR',
};

module.exports = {
  UNAUTHORIZED_ERROR,
  COOKIE_ERROR,
};
