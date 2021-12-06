import { useState } from "react";
import dataAxios from "../../config/api/apiKeyInstance";
import { useQuery } from "react-query";

export default function useFetchData(endopint, queryName) {
  //endpoint is the endopint of resorces (ex. "/movies/top_rated" or "/tv/top-rated")
  //queryName is a catching name for hook useQuery

  const fetchData = async () => {
    const response = await dataAxios.get(endopint);
    return response;
  };

  const { data, dataStatus } = useQuery(`${queryName}`, fetchData);

  return [data, dataStatus];
}
