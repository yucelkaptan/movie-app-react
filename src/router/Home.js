import React from 'react';
import PopularMovies from '../components/PopularMovies';
import NowPlaying from '../components/NowPlaying';
import RandomMovies from '../components/RandomMovies';

const Home = () => {
  return (
    <div>
      <PopularMovies />
      <NowPlaying />
      <RandomMovies />
    </div>
  );
};

export default Home;