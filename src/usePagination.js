import { useState, useEffect } from 'react';
export function usePagination(initialPage = 1) {
  
  const [page, setPage] = useState(initialPage);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [prevDisabled, setprevDisabled] = useState(true);
  //const [nextDisabled, setnextDisabled] = useState(false);
  
  useEffect(() => {
    setCurrentPage(page);
    setprevDisabled(page === 1);
  
  }, [page]);

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviusPage() {
    setPage(page - 1);
  }

  return {
    page,
    currentPage,
    prevDisabled,
    handleNextPage,
    handlePreviusPage,
  };
}
