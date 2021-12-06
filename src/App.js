import React, { useState, useEffect, useContext } from "react";
import Navigation from "./navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import useFetchData from "./hooks/apiHooks/useFetchData";

import Movies from "./features/pages/Movies";
import Shows from "./features/pages/Shows";

function App() {
  const [data, status] = useFetchData("/configuration", "configuration");
  console.log("Image URL [App.js]", data);
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<Shows />} />
      </Routes>
    </div>
  );
}

export default App;
