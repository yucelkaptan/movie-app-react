import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../assets/MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "cd6a8d693944d0640057506a61ea8109";
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setIsLoading(false);
      });
  }, [id, API_URL]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!movieDetails || movieDetails.status_code) {
    return <div>Movie details not available.</div>;
  }

  return (
    <div className="movie-details-container">
      <h2 className="movie-title">{movieDetails.title}</h2>
      <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p className="movie-overview">{movieDetails.overview}</p>
      <p className="movie-release-date">Release Date: {movieDetails.release_date}</p>
      <p className="movie-rating">Rating: {movieDetails.vote_average}</p>
  </div>
  );
};

export default MovieDetail;
