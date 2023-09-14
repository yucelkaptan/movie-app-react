import React from 'react';
import '../assets/MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>{movies.length} matching movies found</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-item" key={movie.id}>
            {movie.poster_path ? (
              <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            ) : (
              <p className="no-poster">No Poster</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
