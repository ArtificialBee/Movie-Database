import React, { createContext } from "react";
import Navigation from "./navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { getImageURL } from "./config/api/imageURL_API";

// import Movies from "./features/pages/Movies";
import Movies from "./features/movies/Movies";
import Shows from "./features/shows/Shows";
import { useQuery } from "react-query";

const ImageURLContext = createContext();

function App() {
  const { data, isLoading, error } = useQuery("image", getImageURL);
  console.log("Image URL [App.js]", data);

  let value = "";

  if (!isLoading && !error) {
    value = data.images.base_url + "w500";
  }

  return (
    <div>
      <ImageURLContext.Provider value={value}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate replace to="/movies" />} />
          <Route path="/movies" element={<Movies imageURL={value} />} />
          <Route path="/tvshows" element={<Shows imageURL={value} />} />
        </Routes>
      </ImageURLContext.Provider>
    </div>
  );
}

export default App;
