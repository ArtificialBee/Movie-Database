import { Routes, Route, Navigate } from "react-router-dom";
import Details from "../features/details";
import Content from "../features/content";

const manageQuery = () => {};

const NavigationRoutes = ({ changeNavigation }) => {
  console.log("Rendovao sam [NavigationRoutes.js]");
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/library/tv" />} />
      <Route path="/library/:content" element={<Content />} />
      <Route
        path="/library/:content/:id"
        element={<Details onOpen={changeNavigation} />}
      />
    </Routes>
  );
};

export default NavigationRoutes;
