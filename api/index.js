const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const middlewares = require('./middlewares');
const endpoints = require('./endpoints');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const app = express();

app.use(logger());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', middlewares.createContext, endpoints());
app.use(middlewares.handleNotFound);
app.use(middlewares.handleErrors);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

module.exports = app;
