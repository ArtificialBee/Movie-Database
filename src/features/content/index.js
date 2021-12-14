import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getData } from "./getData";
import { useDebounce } from "use-debounce";
import Layout from "../layout";
import SearchInput from "../search/searchInput";

function Content() {
  const { content } = useParams(); //Web-route parameters
  const [searchParams, setSearchParams] = useSearchParams(); //state for search parameters
  const searchPreParameter = searchParams.get("q") ? searchParams.get("q") : ""; //variable for remeber if search parameter exist
  const [search, setSearch] = useState(searchPreParameter); //state for search

  const [data, setData] = useState(null); //fetched data
  const [debauncedSearch] = useDebounce(search, 1000); //debounced data (1s)
  const { mutate } = useMutation(content, getData); //mutation

  useEffect(() => {
    let mutationObject = {
      endpoint: "",
      searchValue: debauncedSearch,
    };
    if (debauncedSearch.length > 3) {
      mutationObject.endpoint = `/search/${content}`;
      mutationObject.searchValue = debauncedSearch;
    } else {
      delete mutationObject.searchValue;
      if (content === "movie") {
        mutationObject.endpoint = "/movie/top_rated";
      }
      if (content === "tv") {
        mutationObject.endpoint = "/tv/top_rated";
      }
    }

    if (search !== "") {
      setSearchParams({ q: search });
    }

    mutate(mutationObject, {
      onSuccess: ({ results }) => {
        setData(results);
      },
    });
  }, [content, debauncedSearch, searchParams]);

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
      <Layout data={data} />
    </>
  );
}

export default Content;
