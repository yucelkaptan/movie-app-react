// App.js
import React from "react";
import { WhiteListProvider } from "./WhiteListContext";
import MovieDetail from "./MovieDetail";
import WhiteListPage from "./WhiteListPage";

const App = () => {
  const sampleMovie = {
    title: "Inception",
    description: "A movie about dreams within dreams.",
  };

  return (
    <WhiteListProvider>
      <MovieDetail movie={sampleMovie} />
      <WhiteListPage />
    </WhiteListProvider>
  );
};

export default App;
