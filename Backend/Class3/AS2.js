const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://guptat320:rK4rUDI9mK5JIuw5@scaler.ptkqtj4.mongodb.net/scaler?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String },
    email: { type: String },
  })
);

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404);

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { app, User };