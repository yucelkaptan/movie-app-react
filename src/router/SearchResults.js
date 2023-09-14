import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const { searchQuery } = useParams();  
  const apiKey = 'cd6a8d693944d0640057506a61ea8109';

  useEffect(() => {
    if (searchQuery) {  
      const fetchSearchResults = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`);
          setMovies(response.data.results);  
        } catch (error) {
          console.error("An error occurred: ", error);
        }
      };
      fetchSearchResults();
    }
  }, [searchQuery]);

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
