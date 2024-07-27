const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

app.post("/login", (req, res) => {
  // Implementation for login
});

app.get("/secret", (req, res) => {
  // Implementation for token validation and response
});

module.exports = app;
