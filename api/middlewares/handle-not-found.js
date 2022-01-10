const errors = require('../utils/errors');

module.exports = function handleNotFound(req, res, next) {
  return next(new errors.NotFound);
};
