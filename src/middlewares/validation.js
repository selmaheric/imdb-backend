const Validator = require('fastest-validator');

const validator = new Validator();

const validateQuery = (schema = {}) => function validateQueryMiddleware(req, res, next) {
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

const validateBody = (schema = {}) => function validateBodyMiddleware(req, res, next) {
  const check = validator.compile(schema);
  const checkResult = check(req.body);
  if (checkResult !== true) {
    next({
      name: 'ValidationError',
      message: 'Body validation error!',
      statusCode: 422,
      type: 'VALIDATION_ERROR',
      errors: checkResult,
    });
  }
  return next();
};

const validateParams = (schema = {}) => function validateParamsMiddleware(req, res, next) {
  const check = validator.compile(schema);
  const checkResult = check(req.params);
  if (checkResult !== true) {
    next({
      name: 'ValidationError',
      message: 'Params validation error!',
      statusCode: 422,
      type: 'VALIDATION_ERROR',
      errors: checkResult,
    });
  }
  return next();
};

module.exports = {
  validateQuery,
  validateBody,
  validateParams,
};
