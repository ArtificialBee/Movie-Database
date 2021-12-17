import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getData } from "./dataAPI";
import useMutationObject from "./useMutationObject";
import Layout from "../../components/layout/index";
import SearchInput from "../../components/search/searchInput";
import { LoadingSpinner } from "../../components/spinners/spinner";
import usePagination from "../../components/pagination/usePagination";
import Pagination from "../../components/pagination";
import { paginate } from "../../components/pagination/paginate";

function Content() {
  const { content } = useParams(); //Web-route parameters

  const [searchParams, setSearchParams] = useSearchParams(); //state for search parameters
  const searchPreParameter = searchParams.get("q") || ""; //variable for remeber if search parameter exist
  const [search, setSearch] = useState(searchPreParameter); //state for search

  const [page, setPage] = usePagination();

  const mutationObject = useMutationObject(content, search, page);
  const { mutate, data, isLoading } = useMutation(getData); //mutation

  const changePage = (action) => {
    setPage(paginate(action, page, data.total_pages));
  };

  useEffect(() => {
    mutate(mutationObject);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [mutationObject, page, searchParams]);

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
      <Pagination currentPage={page} changePage={changePage} />
    </>
  );
}

export default Content;
