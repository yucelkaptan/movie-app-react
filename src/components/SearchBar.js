import React, { useState } from 'react';
import axios from 'axios';
import "../assets/SearchBar.css";

const SearchBar = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: 'cd6a8d693944d0640057506a61ea8109',
        query: searchTerm,
      },
    });
    setMovies(response.data.results);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies();
    }
  };

  return (
    <div class="container">
    <input
      className='searchBarStyle'
      type="text"
      placeholder="Search for a movie..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={handleKeyPress}
    />
    </div>
  );
};

export default SearchBar;
