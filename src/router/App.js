import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import MovieDetail from './MovieDetail';
import PopularMovies from '../components/PopularMovies';
import NowPlaying from '../components/NowPlaying';
import RandomMovies from '../components/RandomMovies';
import SearchResults from './SearchResults';
import "../assets/style.css";

const Home = () => {
  const navigate = useNavigate();  
  const [searchQuery, setSearchQuery] = useState(null);

  const updateSearchQuery = (newResults) => {
    setSearchQuery(newResults);
    navigate(`/search/${newResults}`);  
  };

  return (
    <>
      <div className="App">
        <h1>What do you want to watch?</h1>
        <nav>
          <SearchBar setSearchQuery={updateSearchQuery} />
        </nav>
        <PopularMovies />
        <NowPlaying />
        <RandomMovies />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className='home'>Home</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search/:searchQuery" element={<SearchResults />} />  
      </Routes>
    </Router>
  );
};

export default App;
