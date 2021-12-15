import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getData } from "./getData";
import { useDebounce } from "use-debounce";
import Layout from "../../components/layout";
import SearchInput from "../../components/search/searchInput";
import { deleteQuery } from "../../utils/deleteQuery";

function Content() {
  const { content } = useParams(); //Web-route parameters
  const [searchParams, setSearchParams] = useSearchParams(); //state for search parameters
  const [search, setSearch] = useState(searchParams.get("q") || ""); //state for search

  const [debauncedSearch] = useDebounce(search, 300); //debounced data (1s)
  const { mutate, data } = useMutation(content, getData); //mutation

  useEffect(() => {
    let mutationObject = {
      endpoint: "",
      searchValue: debauncedSearch,
    };
    if (debauncedSearch.length > 3) {
      mutationObject.endpoint = `/search/${content}`;
      mutationObject.searchValue = debauncedSearch;
      setSearchParams({ q: search });
    } else {
      setSearchParams(deleteQuery(searchParams, "q"));
      delete mutationObject.searchValue;
      if (content === "movie") {
        mutationObject.endpoint = "/movie/top_rated";
      }
      if (content === "tv") {
        mutationObject.endpoint = "/tv/top_rated";
      }
    }

    mutate(mutationObject);
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
      <Layout data={data?.results} />
    </>
  );
}

export default Content;
