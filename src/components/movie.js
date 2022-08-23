import React from "react";


export default function Movie(movie){
    return (
        <div>
            <div className="movie_wrapper">
                <img  src={movie.movie.Poster} alt={movie.movie.Title}/>
            </div>
        </div>
    )
}