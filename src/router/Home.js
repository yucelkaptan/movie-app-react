import React from 'react';
import { useNavigate } from 'react-router-dom';
import PopularMovies from '../components/PopularMovies';
import NowPlaying from '../components/NowPlaying';
import RandomMovies from '../components/RandomMovies';
import "../assets/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToWhiteList = () => {
    navigate('/whitelist');
  };

  return (
    <div>
      <button className="whiteListButton" onClick={goToWhiteList}>Go to WhiteList</button>
      <PopularMovies />
      <NowPlaying />
      <RandomMovies />
    </div>
  );
};

export default Home;
