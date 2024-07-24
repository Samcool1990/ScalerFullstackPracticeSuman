const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(
    "mongodb+srv://guptat320:rK4rUDI9mK5JIuw5@scaler.ptkqtj4.mongodb.net/scaler?retryWrites=true&w=majority&appName=scaler",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );


const Movie = mongoose.model(
  "Movie",
  new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    genre: { type: String, required: true },
    language: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    poster: { type: String, required: true },
  })
);

// Your code goes here.
app.put("/movies/:id", async (req, res) => {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!movie) return res.status(404).send("Movie not found");
      res.json(movie);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = app;
