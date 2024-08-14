import React, { useEffect } from 'react'

const MovieList = () => {
    useEffect((e) => {
        console.log(e);
        loadMovieByPage();
    }, []);

    const loadMovieByPage = () => {
        fetch()
            .then()
            .then()
    }
    return(
        <div>
            <h1>Welcome to my IMDB home page</h1>
        </div>
    )
}

export default MovieList;