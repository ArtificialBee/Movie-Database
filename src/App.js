import React, { useState, useEffect, useContext } from "react";
import Navigation from "./navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { useQuery } from "react-query";

import Movies from "./features/pages/Movies";
import Shows from "./features/pages/Shows";

function App() {
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
