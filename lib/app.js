const express = require('express');
const app = express();
const futuramaRoutes = require('../lib/routes/futurama.js');
const notFound = require('./middleware/not-found');
const error = require('./middleware/error');

app.use(express.json());
app.use(futuramaRoutes);


app.use(notFound);
app.use(error);

module.exports = app;
