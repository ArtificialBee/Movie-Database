import React from "react";
import Layout from "../layout";
import dataAxios from "../../config/api/apiKeyInstance";
import { useQuery } from "react-query";

const fetchMovies = async () => {
  const response = await dataAxios.get("/movie/top_rated");
  return response;
};

function Movies() {
  const { data, status } = useQuery("movies", fetchMovies);
  console.log(data);

  return (
    <div>
      <Layout c="red" />
    </div>
  );
}

export default Movies;
