const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    const token = jwt.sign({ username: "admin" }, "tushar11");
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials"); // Fix: Use status() instead of sendStatus()
  }
});

app.get("/secret", (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "tushar11", (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      res.send(`Welcome to the secret area`);
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = app;