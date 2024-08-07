const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect(
  "mongodb+srv://guptat320:rK4rUDI9mK5JIuw5@scaler.ptkqtj4.mongodb.net/scaler?retryWrites=true&w=majority&appName=scaler",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Book = mongoose.model(
  "Book",
  new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
  })
);

const authenticate = (req, res, next) => {
  const apiKey = req.headers.authorization;
  if (apiKey !== "mysecretkey") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

app.get("/books", authenticate, async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/books", authenticate, async (req, res) => {
  try {
    const book = new Book(req.body);
    const newBook = await book.save();
    res.json(newBook);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/books/:id", authenticate, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.put("/books/:id", authenticate, async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/books/:id", authenticate, async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { app, Book };