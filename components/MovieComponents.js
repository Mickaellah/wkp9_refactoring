import React, { useEffect, useState } from "react";
// import '../styles.css'

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
            {movies.map((movie) => 
                <article className="container">
                    <div className="headingContainer">
                        <h2 className="subHeading">{movie.title}</h2>
                        <p>{movie.release_date}</p>
                        <p>{movie.rt_score}</p>
                    </div>
                    <p>{movie.description}</p>
                    <div className="name">
                        <p>{movie.director}</p>
                        <p className="producer">{movie.producer}</p>
                    </div>
                </article>
            )
            }
        </div>
    )
}


export default MovieComponents;