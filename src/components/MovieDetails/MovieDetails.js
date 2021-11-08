import React, { useState, useEffect } from "react";
import "./moviedetails.css";

const MovieDetails = ({ match, movies }) => {


  const [movie, setMovie] = useState({});

  const findMovie = () => {
    setMovie(movies.find((el) => el.id === +match.params.myid));
  };

  useEffect(() => {
    findMovie();
  }, []);
  return (
    <div>
          <h1>{movie.title}</h1>
          <img className="Designimg" src={movie.posterurl}/>
          <h2>{movie.description }</h2>
          <h2> rating: {movie.rating}</h2>
    
     
    </div>
  );
};

export default MovieDetails;




 

 

 
