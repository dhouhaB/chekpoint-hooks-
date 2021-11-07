import React from "react";
import Movie  from "../Movie/Movie";
import "./movieList.css";


const MoviesList = ({ filterByName, movies,rate}) => {
  return (
    <div className="movielist">
      {movies
        .filter((movie) =>
        movie.title.toLowerCase().includes(filterByName.toLowerCase() ) && movie.rating >= rate

        )
        
        .map((movie, i) => (
      <Movie movie={movie} key={i}/>





        ))}
    </div>
  );
};

export default MoviesList
