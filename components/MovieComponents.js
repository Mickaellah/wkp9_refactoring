import React, { useEffect, useState } from "react";

const MovieComponents = () => {
    const [ movies, setMovies ] = useState([]);

    const fetchMovies = async () => {
        const result = await fetch("https://ghibliapi.herokuapp.com/films");
        const response = await result.json();
        console.log(response);
        setMovies(response);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            {(movies.length === 0) ? <p>Loading...</p> : ''}
            {movies.sort((a, b) => b.rt_score - a.rt_score).map((movie) => 
                <article className="container" key={movie.id}>
                    <div className="headingContainer">
                        <h2 className="subHeading">{movie.title}</h2>
                        <p><b>Released date:</b> {movie.release_date}</p>
                        <p><b>Score rate:</b> {movie.rt_score}</p>
                    </div>
                    <p>{movie.description}</p>
                    <div className="name">
                        <p><b>Director:</b> {movie.director}</p>
                        <p className="producer"><b>Producer:</b> {movie.producer}</p>
                    </div>
                </article>
            )
            }
        </div>
    )
}


export default MovieComponents;