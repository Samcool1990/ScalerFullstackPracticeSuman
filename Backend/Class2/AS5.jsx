const express = require("express");
const app = express();

// Define the middleware function
function requestLoggerMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    console.log(`[${timestamp}] ${method} request received`);
    next(); // Call next() to pass control to the next middleware
}

app.use(requestLoggerMiddleware);

module.exports = app;
