import React from "react";

import Layout from "../layout";
import useFetchData from "../../hooks/apiHooks/useFetchData";

function Movies() {
  const [data, status] = useFetchData("/movie/top_rated");
  console.log("FILMOVI -> ", data);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default Movies;
