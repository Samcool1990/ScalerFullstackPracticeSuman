import Movie from "../model/movie.model.js";

// add movies
export const addMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    console.log('newMovie', newMovie)
    newMovie.owner = req.user.id;
    const movieDetails = await newMovie.save();
    res.send({
      success: true,
      ...movieDetails,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// get movies by Id
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId);

    if (!movie) {
      return res.status(404).send({
        success: false,
        message: "Movie Not Found",
      });
    }
    res.send({
      success: true,
      ...movie,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// get all movies
export const getAllMovie = async (req, res) => {
  try {
    const filter = {};
    const moviesDetails = await Movie.find(filter);
    res.send(moviesDetails);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const updateMovie = async (req, res) => {
  try {
    // const updatedMovie = await Movie.findByIdAndUpdate(
    //   req.params.movieId,
    //   req.body,
    //   { new: true, runValidators: true }
    // );
    const updatedMovie = await Movie.updateOne(
      { _id: req.params.movieId },
      { $set: req.body }
    );
    if (!updatedMovie) {
      return res.status(404).send({
        success: false,
        message: "Movie not found",
      });
    }
    res.send({
      success: true,
      movie: updatedMovie,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// delete movie

export const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.movieId);
    if (!deletedMovie) {
      return res.status(404).send({
        success: false,
        message: "Movie not found",
      });
    }
    res.send({
      success: true,
      message: "Movie deleted successfully",
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

//Deactivate Movie
//Activate Movie
