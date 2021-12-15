import React from "react";
import Navigation from "./routing";
import { ImageURLProvider } from "./context/imageURLContext";

function App() {
  return (
    <div>
      <ImageURLProvider>
        <Navigation />
      </ImageURLProvider>
    </div>
  );
}

export default App;
