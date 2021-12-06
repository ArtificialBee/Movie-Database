import React from "react";
import useFetchData from "../../hooks/apiHooks/useFetchData";

import Layout from "../layout";
import dataAxios from "../../config/api/apiKeyInstance";

function Shows() {
  const [data, status] = useFetchData("/tv/top_rated", "tv");
  console.log("SERIJE -> ", data);
  return (
    <div>
      <Layout data={data ? data.data.results : null} />
    </div>
  );
}

export default Shows;
