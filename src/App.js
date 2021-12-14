import React, { useState, useEffect } from "react";
import Navigation from "./routing";
import { ImageURLProvider } from "./context/imageURLContext";
import { useParams } from "react-router-dom";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const { id } = useParams();
  console.log("Renderovao sam App.js");
  console.log("ID -> ", id);
  useEffect(() => {
    if (id) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [id]);
  return (
    <div>
      <ImageURLProvider>
        <Navigation showNavigation={showNavbar} />
      </ImageURLProvider>
    </div>
  );
}

export default App;
