import React from "react";
import { useQuery } from "react-query";
import { useImageURL } from "../../context/imageURLContext";

import Layout from "../layout";
import { getShows } from "./showsAPI";

function Shows() {
  const { data, isLoading, error } = useQuery("shows", getShows);
  const imageURL = useImageURL();

  if (isLoading) {
    return <p>Loading shows...</p>;
  } else {
    data.results.map((element) => {
      element.full_image_path = imageURL + element.poster_path;
    });
  }

  return (
    <div>
      <Layout data={data.results} />
    </div>
  );
}

export default Shows;
