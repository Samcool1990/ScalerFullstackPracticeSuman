// https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=1

import { useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { FavouriteMovieContext } from "../context/FavouriteMovieContext";


const MovieList = () => {
    const { favourites, onAdd, onDelete } = useContext(FavouriteMovieContext);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        loadMovieByPage(1);
    }, []);

    console.log('Rerendered');
    const loadMovieByPage = useCallback((pageNo) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${pageNo}`)
            .then((res) => res.json())
            .then(data => setMovies(data.results));
    }, []);

    const getTotalVoteCount = useMemo(() => {
        console.log('compute vote count');
        return movies?.reduce((acc, movie) => {
            acc += movie.vote_count;
            return acc;
        }, 0);
    }, [movies]);

    return (
        <div className="movielist-wrapper">
            <div className="movielist-heading">
                <h1>Trending {Object.keys(favourites).length}</h1>
                <h2>Vote Count: {getTotalVoteCount}</h2>
            </div>
            <div className="movielist">
                {
                    movies.map(movie => (
                        <div className="movie">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            {/* <a href="/movie-detail"><h2>{movie.original_title}</h2></a> */}
                            <Link to={`/movie-detail/${movie.id}`}><h2>{movie.original_title}</h2></Link>
                            {
                             favourites[movie.id] ? (
                                <button onClick={() => onDelete(movie)}>Remove from Favourites</button>
                             ) : (
                                 <button onClick={() => onAdd(movie)}>Add to Favourites</button>
                             ) 
                            }
                        </div>
                    ))
                }
            </div>
            <Pagination loadMovieByPage={loadMovieByPage} />
        </div>
    )
}

export default MovieList;