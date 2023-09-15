import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../assets/MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: 'cd6a8d693944d0640057506a61ea8109'
        }
      });
      setMovieDetails(response.data);
    };

    fetchData();
  }, [id]);

  if (!movieDetails) return <h1>Loading...</h1>;

  return (
    <div className='movie-details-container'>
      <h1 className='movie-title'>{movieDetails.title}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} 
        alt={movieDetails.title}
      />
      <p className='movie-overview'>{movieDetails.overview}</p>
      <p className='movie-release-date'>Release Date: {movieDetails.release_date}</p>
      <p className='movie-rating'>Rating: {movieDetails.vote_average} / 10</p> 
    </div>
  );
};

export default MovieDetail;
