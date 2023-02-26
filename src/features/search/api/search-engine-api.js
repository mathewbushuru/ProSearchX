import axios from "axios";

import { SEARCH_ENGINE_API_URL } from "config";

export const searchEngineApi = async (searchQuery) => {
  const response = await axios.get(`${SEARCH_ENGINE_API_URL}&q=${searchQuery}`);
  const searchData = response.data;
  console.log(searchData);
};
