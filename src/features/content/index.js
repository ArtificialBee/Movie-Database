import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getData } from "./dataAPI";
import useMutationObject from "./useMutationObject";
import Layout from "../../components/layout/index";
import SearchInput from "../../components/search/searchInput";
import { LoadingSpinner } from "../../components/spinners/spinner";

function Content() {
  const { content } = useParams(); //Web-route parameters
  const [searchParams, setSearchParams] = useSearchParams(); //state for search parameters
  const searchPreParameter = searchParams.get("q") || ""; //variable for remeber if search parameter exist
  const [search, setSearch] = useState(searchPreParameter); //state for search

  const mutationObject = useMutationObject(content, search);
  const { mutate, data, isLoading } = useMutation(content, getData); //mutation

  useEffect(() => {
    console.log("Pozvao sam useEffect");
    mutate(mutationObject);
  }, [mutationObject]);

  return (
    <>
      <SearchInput
        onSearch={setSearch}
        placeholder={
          content === "movie"
            ? "Search for movies..."
            : "Search for tv shows..."
        }
        value={search}
      />
      {isLoading ? <LoadingSpinner /> : <Layout data={data} />}
    </>
  );
}

export default Content;
