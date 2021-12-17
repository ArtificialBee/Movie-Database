import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function usePagination() {
  const [currentPage, setCurrentPage] = useSearchParams();
  const [page, setPage] = useState(currentPage.get("page") || 1);

  useEffect(() => {
    setCurrentPage({ page: page });
  }, [page]);

  return [page, setPage];
}
