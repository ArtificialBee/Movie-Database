import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "react-router-dom";

function deleteQuery(object, param) {
  object.delete(param);
  return object.toString();
}

const useMutationObject = (content, initialValue, page) => {
  const [searchParams, setSearchParams] = useSearchParams(); //state for search parameters
  const [mutationObject, setMutaionObject] = useState({
    endpoint: ``,
    page: page,
  });
  const [debounced] = useDebounce(initialValue, 500);

  useEffect(() => {
    if (debounced.length > 3) {
      setMutaionObject({
        page: page,
        endpoint: `/search/${content}`,
        searchValue: debounced,
      });
      setSearchParams({ q: debounced, page: page });
    } else {
      if (mutationObject.searchValue) {
        setSearchParams(deleteQuery(searchParams, "q"));
      }

      setSearchParams({ page: page });

      if (content === "movie") {
        setMutaionObject({
          endpoint: "/movie/top_rated",
          page: page,
        });
      }

      if (content === "tv") {
        setMutaionObject({
          endpoint: "/tv/top_rated",
          page: page,
        });
      }
    }
  }, [content, debounced, page]);
  return mutationObject;
};

export default useMutationObject;
