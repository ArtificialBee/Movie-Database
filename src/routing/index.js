import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Content from "../features/content";
import Details from "../features/details";

function Navigation() {
  console.log("Rendovao sam [NavigationRoutes.js]");
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Navigate replace to="/library/tv" />} />
        <Route path="library/:content" element={<Content />} />
      </Route>
      <Route path="/library/:content/:id" element={<Details />} />
    </Routes>
  );
}

export default Navigation;
