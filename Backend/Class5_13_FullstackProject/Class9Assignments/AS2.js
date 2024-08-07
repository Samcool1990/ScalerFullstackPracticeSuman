const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const validator = require("validator");

mongoose.connect(
  "mongodb+srv://guptat320:rK4rUDI9mK5JIuw5@scaler.ptkqtj4.mongodb.net/scaler?retryWrites=true&w=majority&appName=scaler",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

function validateInput(req, res, next) {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (typeof username !== "string" || username.length < 1) {
    return res.status(400).json({ message: "Invalid username" });
  }

  if (typeof password !== "string" || password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  next();
}

app.post("/users", validateInput, async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const user = new User({ username, password, email });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// GET /users Implementation
app.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// GET /users/:id Implementation
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// PUT /users/:id Implementation
app.put("/users/:id", validateInput, async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, password, email },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

// DELETE /users/:id Implementation
app.delete("/users/:id", async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = { app, User };