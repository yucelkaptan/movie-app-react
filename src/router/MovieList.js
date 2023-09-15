import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/MovieList.css"; 

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">  
      <h2>Search Results</h2>  
      <div className="movie-list">  
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">  
            <Link to={`/movie/${movie.id}`}>
              <img 
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
