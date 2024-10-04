require('dotenv').config({ path: '../.env' });
const express = require('express');
const middleware = require('./middleware');
const { notFoundHandler, errorHandler } = require('./error');
const router = require('./routers');
const myDB = require('../db/dbTickets');
const app = express();

app.use(middleware);  // Apply middleware before routing
app.use(router);

// Error handling middlewares
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
