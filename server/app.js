const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

module.exports = app;
