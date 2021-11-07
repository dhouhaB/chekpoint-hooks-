import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";


import MovieList from "./components/MoviesList/MoviesList"
import { data } from "./data";
import SearchMovie from "./components/Filter/SearchMovie";



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
      <MovieList
        movies={movies}
        filterByName={filterByName}
        rate={rate}
     
      />
    </div>
  );
};

export default App;
