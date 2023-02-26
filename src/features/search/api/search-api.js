import {
  SEARCH_ENDPOINT1_URL,
  SEARCH_ENDPOINT1_KEY,
  SEARCH_ENDPOINT1_HOST,
  SEARCH_ON,
} from "config";
import DUMMY_SEARCH_RESULTS from "./dummy-search-results";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": SEARCH_ENDPOINT1_KEY,
    "X-RapidAPI-Host": SEARCH_ENDPOINT1_HOST,
  },
};

export const searchApi = (searchQuery) => {
  if (SEARCH_ON) {
    fetch(
      `${SEARCH_ENDPOINT1_URL}/search?query=${searchQuery}&gl=us&lr=en&num=1000&start=0&sort=relevance`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => console.error(err));
  } else {
    // console.log("Search currently turned off to prevent hitting rate limit");
    return DUMMY_SEARCH_RESULTS;
  }
};
