import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { useWhiteList } from './WhiteListContext';
import "../assets/MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [movieDetails, setMovieDetails] = useState(null);
  const { addToWhiteList } = useWhiteList();

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

  const handleAddToWhiteList = () => {
    addToWhiteList({
      id: movieDetails.id,
      title: movieDetails.title,
      overview: movieDetails.overview,
      release_date: movieDetails.release_date,
      vote_average: movieDetails.vote_average,
      poster_path: movieDetails.poster_path,
    });
    navigate("/whitelist");
  };

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
      <button onClick={handleAddToWhiteList}>Add to Whitelist</button>
    </div>
  );
};

export default MovieDetail;
