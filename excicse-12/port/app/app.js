require('dotenv').config({ path: '../.env' });
const express = require('express');
const middleware = require('./middleware');
const { notFoundHandler, errorHandler } = require('./error');
const router = require('./Routers'); // Importing Routers correctly

const app = express();

const myDB = require('../db/db');
// myDB.create('user 1', 10)
// myDB.create('user 2', 10)
// myDB.create('user 3', 10)
// myDB.create('user 4', 10)
// myDB.create('user 5', 10)

// myDB.bulkCreate('user 6', 10, 3);

// const tickets = myDB.find();
// console.log("All tickets =",tickets);
// const winner = myDB.draw(3);
// console.log("Winners = ",winner);

// Apply middleware 
app.use(middleware);

// Apply routers 
app.use(router);

// Handle 404 errors
app.use(notFoundHandler);
// Global error handler
app.use(errorHandler);

module.exports = app;
