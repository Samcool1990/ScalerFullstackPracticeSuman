const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// MongoDB Atlas connection string
const mongoURI =
  "mongodb+srv://guptat320:rK4rUDI9mK5JIuw5@scaler.ptkqtj4.mongodb.net/scaler?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Database connection error:", err));

// Define Note schema and model
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Note = mongoose.model("Note", noteSchema);

// Routes
app.post("/notes", async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).send({ error: "Title and content are required" });
    }
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).send(newNote);
  } catch (err) {
    next(err);
  }
});

// Read all Notes
app.get("/notes", async (req, res, next) => {
  try {
    const notes = await Note.find();
    res.status(200).send(notes);
  } catch (err) {
    next(err);
  }
});

// Update a Note
app.put("/notes/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).send({ error: "Note not found" });
    }
    res.status(200).send(updatedNote);
  } catch (err) {
    next(err);
  }
});

// Delete a Note
app.delete("/notes/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).send({ error: "Note not found" });
    }
    res.status(200).send({ message: "Note deleted successfully" });
  } catch (err) {
    next(err);
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

module.exports = { app, Note };