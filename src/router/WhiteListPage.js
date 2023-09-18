import React from 'react';
import { useWhiteList } from './WhiteListContext';
import "../assets/WhiteListPage.css";

const WhiteListPage = () => {
  const { whiteList, deleteFromWhiteList } = useWhiteList();

  return (
    <div>
      <h1>Your WhiteList</h1>
      <div className="poster-container">
        {whiteList.map((movie, index) => (
          <div className="poster-card" key={movie.id}>
            <img 
              className="poster-image"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
              alt={movie.title}
            />
            <button className="delete-button" onClick={() => deleteFromWhiteList(movie.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhiteListPage;
