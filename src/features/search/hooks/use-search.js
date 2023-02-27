import { useState, useEffect } from "react";

import { searchEngineApi } from "features/search/api/search-engine-api";

export const useSearch = (searchQuery) => {
  const [searchResponse, setSearchResponse] = useState({
    searchResults: null,
    hitLimit: false,
  });

  useEffect(() => {
    async function getSearchResults() {
      const receivedSearchResponse = await searchEngineApi(searchQuery);
      setSearchResponse(receivedSearchResponse);
    }
    getSearchResults();
  }, [searchQuery]);

  const { searchResults, hitLimit } = searchResponse;

  return { searchResults, hitLimit };
};
