import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";


import MovieList from "./components/MoviesList/MoviesList"
import { data } from "./data";
import SearchMovie from "./components/Filter/SearchMovie";

import { Route } from "react-router-dom";
import MovieDetails  from "./components/MovieDetails/MovieDetails";


const App = () => {
  const [movies, setMovies] = useState(data);
  const [filterByName, setFilterByName] = useState("");

  
  const [rate,setRate]= useState(0)

  const addMovie = (newMovie) => {
    return setMovies([...movies, newMovie]);
  };

  return (
    <div>
    <NavBar addMovie={addMovie} setFilterByName={setFilterByName} setRate={setRate} />


    
       
      <Route
        exact
        path="/"
        component={() => (
      <MovieList
        movies={movies}
        filterByName={filterByName}
        rate={rate}
     
      />
      )}
      />
      
      <Route
        exact
        path="/moviedetails/:myid"
        component={(defaultProps) => (
          <MovieDetails movies={movies} {...defaultProps} />
        )}
      />



    </div>
  );
};

export default App;
