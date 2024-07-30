import { model, Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minLength: [5, "Min 5 characters are required"],
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    genre: {
      type: [String],
      enum: ["Thriller", "Action", "Fantasy", "Comedy", "Adventure", "Horror"],
      required: true,
    },
    language: {
      type: [String],
      enum: ["English", "Hindi"],
      required: true,
    },
    releaseDate: {
      type: String, // Should be Date
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Movie = model("movies", movieSchema);

export default Movie;
