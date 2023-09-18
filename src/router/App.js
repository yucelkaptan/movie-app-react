import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { WhiteListProvider } from './WhiteListContext';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Home from './Home';
import MovieDetail from './MovieDetail';
import Navigation from './Navigation'; 
import WhiteListPage from './WhiteListPage';
import "../assets/style.css";

const MainApp = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const location = useLocation();
  
  return (
    <div className="App">
        {location.pathname !== '/' && <Navigation />} 
        {location.pathname === '/' && (
          <>
            <h1>What do you want to watch?</h1>
            <nav>
              <SearchBar setSearchQuery={setSearchQuery} />
            </nav>
          </>
        )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search-results" element={<MovieList movies={searchQuery} />} />
        <Route path="/whitelist" element={<WhiteListPage />} /> 
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <WhiteListProvider>
        <MainApp />
      </WhiteListProvider>
    </Router>
  );
};

export default App;
