import React from 'react';
import '../assets/MovieList.css'; 

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
