import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/RandomMovies.css'; 

const RandomMovies = () => {
  const [movies, setMovies] = useState([]);
  const TMDB_API_KEY = 'cd6a8d693944d0640057506a61ea8109';

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc`);
        const allMovies = response.data.results;
        const randomMovies = shuffleArray(allMovies).slice(0, 12); 
        setMovies(randomMovies);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchRandomMovies();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </Link>
      ))}
    </div>
  );
};

export default RandomMovies;
