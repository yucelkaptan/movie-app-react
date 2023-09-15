import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // <--- useNavigate'i ekliyoruz
import "../assets/SearchBar.css";

const SearchBar = ({ setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const searchMovies = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: 'cd6a8d693944d0640057506a61ea8109',
        query: searchTerm,
      },
    });
    setSearchQuery(response.data.results);
    navigate('/search-results');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies();
    }
  };

  return (
    <div className="container">
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
