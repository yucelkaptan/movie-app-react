import React, { createContext, useContext, useState } from 'react';

const WhiteListContext = createContext();

export const useWhiteList = () => {
  return useContext(WhiteListContext);
};

export const WhiteListProvider = ({ children }) => {
  const [whiteList, setWhiteList] = useState([]);

  const addToWhiteList = (movie) => {
    if (!whiteList.some(existingMovie => existingMovie.id === movie.id)) {
      setWhiteList([...whiteList, movie]);
    } else {
      alert("This movie is already in your whitelist.");
    }
  };

  const deleteFromWhiteList = (id) => {
    const newWhiteList = whiteList.filter(movie => movie.id !== id);
    setWhiteList(newWhiteList);
  };

  const value = {
    whiteList,
    addToWhiteList,
    deleteFromWhiteList
  };

  return (
    <WhiteListContext.Provider value={value}>
      {children}
    </WhiteListContext.Provider>
  );
};
