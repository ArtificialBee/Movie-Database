import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Layout from "../layout";
import { getMovies } from "./moviesAPI";
import SearchInput from "../search/searchInput";
import { useDebounce } from "use-debounce";
import useSearch from "../search/useSearch";

function Movies() {
  const { data, isLoading, error } = useQuery("movies", getMovies); //fetching all top movies
  const [inputSearch, setInputSearch] = useState(""); //search parametar state
  const [searchValue] = useDebounce(inputSearch, 1000);

  /*
  const logic = (search, tab) => {

    if(search && seaerch >3 && tab === "Movies"){
      data = api req
    }
    else if( search && tab === "tvshows"){
      data = api req 
    }
    esle if( !searchval && tab === "movies"){
      data = api req
    }

    return data
  }
  */
  useEffect(() => {}, [searchValue]);

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div>
      <SearchInput
        placeholder="Search for movies..."
        onSearch={setInputSearch}
        value={inputSearch}
      />
      <Layout data={data.results} />
    </div>
  );
}

export default Movies;
