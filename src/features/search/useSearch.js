import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import searchAPI from "./searchAPI";

export const useSearch = (valueForSearch, endpoint) => {
  const [resolvedData, setResolvedData] = useState(null);
  const { mutate } = useMutation(searchAPI);

  useEffect(() => {
    if (valueForSearch && valueForSearch.length > 3) {
      mutate(
        { query: valueForSearch, endpoint: endpoint },
        {
          onSuccess: ({ results }) => {
            console.log("edvin", results);
            setResolvedData(results);
          },
        }
      );
    } else {
      setResolvedData(null);
    }
  }, [valueForSearch]);

  return resolvedData;
};
