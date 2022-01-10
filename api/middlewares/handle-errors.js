module.exports = function handleErrors(err, req, res, next) {
  const status = err.status || 500;
  const error = err.message || 'Internal Server Error';

  res.status(status).json({ error });
};
