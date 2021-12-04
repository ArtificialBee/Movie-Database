import React from "react";
import { useQuery } from "react-query";

import Layout from "../layout";
import dataAxios from "../../config/api/apiKeyInstance";

const fetchShows = async () => {
  const response = await dataAxios.get("/tv/top_rated");
  return response;
};

function Shows() {
  const { data, status } = useQuery("movies", fetchShows);
  return (
    <div>
      <Layout c="g" />
    </div>
  );
}

export default Shows;
