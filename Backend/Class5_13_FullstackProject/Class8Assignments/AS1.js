/*********************code to be  written in the stub*************************/
const express = require('express');
const app = express();
/*********************code to be  written in the stub*************************/
/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
  /************************learner code ************************/
  // Here goes the learner's code
  // Get the current date and time
  const timestamp = new Date().toISOString();

  // Get the HTTP method
  const method = req.method;

  console.log(`${method} request received`)

  next();
}

// Apply the middleware to all incoming requests
app.use(requestLoggerMiddleware)

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

module.exports = app;
/***********************code will be provided in stub*******************************/
