const express = require("express");
const app = express();

app.get("/validate-number", (req, res) => {
  const number = parseInt(req.query.number);
  if (Number.isInteger(number) && number > 0) {
    res.send("Success!");
  } else {
    res.status(400).send("Invalid positive integer");
  }
});

module.exports = app;