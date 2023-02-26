import axios from "axios";

import { SEARCH_ENGINE_API_URL, SEARCH_ON } from "config";
import DUMMY_SEARCH_ENGINE_RESULTS from "./dummy-search-engine-results";

export const searchEngineApi = async (searchQuery) => {
  let hitLimit;
  if (SEARCH_ON) {
    let searchData;
    try {
      const response = await axios.get(
        `${SEARCH_ENGINE_API_URL}&q=${searchQuery}`
      );
      searchData = await response.data;
    } catch (err) {
      //   console.log(err?.response?.data?.error?.message);
      console.log(
        "I unfortunately hit the rate limit. Using cached search result for now until I resolve it"
      );
      hitLimit = true;
      return { searchResults: DUMMY_SEARCH_ENGINE_RESULTS, hitLimit: hitLimit };
    }
    hitLimit = false;
    return { searchResults: searchData, hitLimit: hitLimit };
  } else {
    console.log("Engine currently turned off to prevent hitting rate limit");
    hitLimit = false;
    return { searchResults: DUMMY_SEARCH_ENGINE_RESULTS, hitLimit: hitLimit };
  }
};
