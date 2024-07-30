const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());

const users = []; // In-memory storage for users

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate the request
    if (!username || !password) {
      return res.status(400).send({ message: "Username and password are required" });
    }

    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Store the user with hashed password
    const newUser = { username, password: hashedPassword };
    users.push(newUser);

    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in /register route:", error.message); // Log the error message
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = app;
