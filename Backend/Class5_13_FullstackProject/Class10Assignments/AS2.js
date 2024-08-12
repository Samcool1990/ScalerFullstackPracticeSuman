const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const validator = require("validator");
const app = express();
app.use(bodyParser.json());

// Replace with your MongoDB Atlas connection string
const MONGO_URI = "mongodb+srv://guptat320:rK4rUDI9mK5JIuw5@scaler.ptkqtj4.mongodb.net/scaler?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Ensure unique indexes are created
})
  .then(() => console.log('Connected to MongoDB atlas'))
  .catch(() => console.log('Error connecting to mongoDB', err))

// Define the User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
});

const User = mongoose.model("User", userSchema);

// Middleware for input validation
function validateInput(req, res, next) {
  const { username, password, email } = req.body;

  if (username && typeof username !== 'string') {
    return res.status(400).json({ error: "Username must be a non-empty string." });
  }

  if (password && (typeof password !== 'string' || password.length < 6)) {
    return res.status(400).json({ error: "Password must be a string with at least 6 characters." });
  }

  if (email && !validator.isEmail(email)) {
    return res.status(400).json({ error: "Email must be a valid email address." });
  }

  next();
}

// Routes for CRUD operations

// POST /users - Create a new user account
app.post("/users", validateInput, async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ error: "Username, password, and email are required." });
    }

    const newUser = new User({ username, password, email });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    if (err.code === 11000) { // Handle duplicate key error
      return res.status(409).json({ error: "Username or email already exists." });
    }
    next(err);
  }
});

// GET /users - Fetch all user accounts
app.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET /users/:id - Fetch a specific user account by ID
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
});

// PUT /users/:id - Update a user's account information
app.put("/users/:id", validateInput, async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json(updatedUser);
  } catch (err) {
    if (err.code === 11000) { // Handle duplicate key error
      return res.status(409).json({ error: "Username or email already exists." });
    }
    next(err);
  }
});

// DELETE /users/:id - Delete a user's account by ID
app.delete("/users/:id", async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json({ message: "User deleted successfully." });
  } catch (err) {
    next(err);
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

module.exports = { app, User };