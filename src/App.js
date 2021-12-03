import React from "react";
import Navigation from './navigation'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Movies from "./features/pages/Movies";
import Shows from "./features/pages/Shows";

function App() {
  return (
    <div>
      <Navigation/>
      <Router>
        <Routes>
          <Route to="/movies" element={<Movies/>}/>
          <Route to="/tvshows" element={<Shows/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
