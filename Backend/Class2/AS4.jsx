const express = require("express");
const app = express();

// Your code goes here.
app.get("/greet", function(req, res) {
    const name = req.query.name || "Guest";
    res.status(200).send(`Hello, ${name}!`);
});

module.exports = app;
