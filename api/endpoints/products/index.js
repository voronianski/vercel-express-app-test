function get(req, res, next) {
  if (req.query.fakeError) {
    return next(new Error(req.query.fakeError));
  }

  res.json({ 
    data: [
      { productId: 1}, 
      {productId: 2}
    ],
    context: req.context
  });
}

function post(req, res) {
  res.json({ 
    payload: req.body, 
    context: req.context 
  });
}

module.exports = {
  get,
  post
};
