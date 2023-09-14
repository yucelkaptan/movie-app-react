import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import MovieDetail from './MovieDetail';
import PopularMovies from '../components/PopularMovies';
import NowPlaying from '../components/NowPlaying';
import RandomMovies from '../components/RandomMovies';
import SearchResults from './SearchResults';
import "../assets/style.css";

const Home = () => {
  return (
    <>
      <PopularMovies />
      <NowPlaying />
      <RandomMovies />
    </>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <Router>
      <div className="App">
        <h1>What do you want to watch?</h1>
        <nav>
          <Link to="/" className='home'>Home</Link>
          <SearchBar setSearchQuery={setSearchQuery} />
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
