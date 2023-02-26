import { searchApi } from "features/search/api/search-api";
import { searchEngineApi } from "features/search/api/search-engine-api";

export const useSearch = (searchQuery) => {
  const searchResults = searchApi(searchQuery);

  return searchResults;
};
