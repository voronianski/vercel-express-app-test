module.exports = function createContext(req, res, next) {
  req.context = req.context || {};
  req.context.locale = req.query.locale || 'US';

  next();
}