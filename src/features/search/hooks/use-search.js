import { searchApi } from "features/search/api/search-api";

export const useSearch = ({ searchQuery }) => {
  const searchResults = searchApi(searchQuery);

  return searchResults;
};
