/*********************code to be  written in the stub*************************/
const express = require('express');
const app = express();

function validateAge(req, res, next) {
  const age = Number(req.query.age);
  if (isNaN(age) || age < 18 || age > 65) {
    return res
      .status(400)
      .json({ error: "Invalid age. Age must be a number between 18 and 65." });
  }
  next();
}

app.get("/check-age", validateAge, (req, res) => {
  res.json({ message: "Age is within the required range." });
});

module.exports = app; 