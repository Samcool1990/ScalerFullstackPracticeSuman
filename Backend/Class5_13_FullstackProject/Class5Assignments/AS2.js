const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://guptat320:rK4rUDI9mK5JIuw5@scaler.ptkqtj4.mongodb.net/scaler?retryWrites=true&w=majority&appName=scaler",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  genre: { type: String, required: true },
  language: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  poster: { type: String, required: true },
});

movieSchema.post("save", function (doc) {
  console.log(`Movie ${doc.title} has been saved`);
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;