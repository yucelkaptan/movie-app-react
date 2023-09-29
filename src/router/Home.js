import React from 'react';
import { useNavigate } from 'react-router-dom';
import PopularMovies from '../components/PopularMovies';
import NowPlaying from '../components/NowPlaying';
import RandomMovies from '../components/RandomMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import "../assets/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToWhiteList = () => {
    navigate('/whitelist');
  };

  return (
    <div>
      <button className="whiteListButton" onClick={goToWhiteList}><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></button>
      <PopularMovies />
      <NowPlaying />
      <RandomMovies />
    </div>
  );
};

export default Home;
