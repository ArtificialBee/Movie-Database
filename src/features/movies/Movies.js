import React, { useContext } from "react";
import { useQuery } from "react-query";
import Layout from "../layout";
import { getMovies } from "./moviesAPI";

function Movies({ imageURL }) {
  const { data, isLoading, error } = useQuery("movies", getMovies);

  // const value = useContext(ImageURLContext);

  if (isLoading) {
    return <p>Loading movies...</p>;
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

export default Movies;
