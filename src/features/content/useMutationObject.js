import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "react-router-dom";

function deleteQuery(object, param) {
  object.delete(param);
  return object.toString();
}

const useMutationObject = (content, initialValue) => {
  const [mutationObject, setMutaionObject] = useState({
    endpoint: `/search/${content}`,
  });
  const [debounced] = useDebounce(initialValue, 500);
  const [searchParams, setSearchParams] = useSearchParams(); //state for search parameters

  useEffect(() => {
    if (debounced.length > 3) {
      setMutaionObject({
        endpoint: `/search/${content}`,
        searchValue: debounced,
      });
      setSearchParams({ q: debounced });
    } else {
      setSearchParams(deleteQuery(searchParams, "q"));
      if (content === "movie") {
        setMutaionObject({ endpoint: "/movie/top_rated" });
      }
      if (content === "tv") {
        setMutaionObject({ endpoint: "/tv/top_rated" });
      }
    }
  }, [content, debounced]);
  return mutationObject;
};

export default useMutationObject;
