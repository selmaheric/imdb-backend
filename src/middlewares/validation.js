const Validator = require('fastest-validator');

const validator = new Validator();

const validateQuery = (schema = {}) => function validateBodyMiddleware(req, res, next) {
  const check = validator.compile(schema);
  const checkResult = check(req.query);
  if (checkResult !== true) {
    next({
      name: 'ValidationError',
      message: 'Query validation error!',
      statusCode: 422,
      type: 'VALIDATION_ERROR',
      errors: checkResult,
    });
  }
  return next();
};

module.exports = {
  validateQuery,
};
