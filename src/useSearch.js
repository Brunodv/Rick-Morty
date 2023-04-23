import { useState, useEffect } from "react";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return {
    searchQuery,
    handleSearch
  };
}
