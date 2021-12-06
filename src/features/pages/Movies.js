import React from "react";

import Layout from "../layout";
import useFetchData from "../../hooks/apiHooks/useFetchData";
import { useEffect, useState } from "react";

function Movies() {
  const [data, status] = useFetchData("/movie/top_rated", "movies");
  useEffect(() => {}, [data]);

  return (
    <div>
      <Layout data={data ? data.data.results : null} />
    </div>
  );
}

export default Movies;
