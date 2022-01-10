const express = require('express');

const products = require('./products');

module.exports = function v1() {
    const router = express.Router();

    router.get('/products', products.get);
    router.post('/products', products.post);

    return router;
};
