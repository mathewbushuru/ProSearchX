import { useDispatch, useSelector } from "react-redux";

import { submitQueryAction } from "../stores/querySlice";

export const useQuery = () => {
  const dispatch = useDispatch();

  const shownWebsites = useSelector((state) => state.ui.shownWebsites);
  const datePublished = useSelector((state) => state.ui.datePublished);
  const fileFormat = useSelector((state) => state.ui.fileFormat);
  const exactWords = useSelector((state) => state.ui.exactWords);
  const similarWords = useSelector((state) => state.ui.similarWords);
  const excludeWords = useSelector((state) => state.ui.excludeWords);

  const queryString = useSelector((state) => state.query.queryString);

  const submitQuery = () => {
    console.log("Submitting query");
    console.log(`query string: ${queryString}`);

    let searchString = queryString;

    console.log(shownWebsites);
    for (const website in shownWebsites) {
      if (shownWebsites[website] && website !== "all") {
        searchString += ` site:${website}.com`;
      }
    }

    console.log(`search string: ${searchString}`);
    const searchUrl = `https://www.google.com/search?q=${searchString}`;

    if (queryString) {
      //   window.location.href = searchUrl;
      window.open(searchUrl, "_blank");
    }
  };

  return [submitQuery];
};
