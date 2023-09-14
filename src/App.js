import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PopularMovies from './components/PopularMovies';
import NowPlaying from './components/NowPlaying';
import RandomMovies from "./components/RandomMovies";
import MovieList from "./components/MovieList";
import "./assets/style.css";

const App = () => {
  const [movies, setMovies] = useState(null);

  const goToHomePage = () => {
    setMovies(null);
  };

  return (
    <div className="App">
      <h1>What do you want to watch?</h1>
      <div className="header-controls">
        <SearchBar setMovies={setMovies} />
        <button onClick={goToHomePage} className="home-button">Home</button>
      </div>
      
      {movies ? (
        <MovieList movies={movies} />
      ) : (
        <>
          <PopularMovies />
          <NowPlaying />
          <RandomMovies />
        </>
      )}
    </div>
  );
};

export default App;
