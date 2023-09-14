import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/PopularMovies.css';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = 'cd6a8d693944d0640057506a61ea8109';

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        const movieData = response.data.results.slice(0, 6);
        const moviePosters = movieData.map(movie => `https://image.tmdb.org/t/p/w500${movie.poster_path}`);
        setMovies(moviePosters);
      } catch (error) {
        console.error("An error occurred: ", error);
      }
    };

    fetchPopularMovies();
  }, [apiKey]);

  return (
    <div className="movie-container">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <img src={movie} alt="Movie Poster" className="movie-poster" />
        </div>
      ))}
    </div>
  );
};

export default PopularMovies;
