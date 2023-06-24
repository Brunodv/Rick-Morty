import { useState } from "react";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [resetPage, setResetPage] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);  
    setResetPage(true);
  };

  return {
    searchQuery,
    handleSearch,
    resetPage

  };
}
