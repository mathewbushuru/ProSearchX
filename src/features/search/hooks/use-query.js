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

    // websites
    for (const website in shownWebsites) {
      if (shownWebsites[website] && website !== "all") {
        searchString += ` site:${website}.com OR`;
      }
    }
    searchString = searchString.substring(0, searchString.length - 3);
    if (shownWebsites.all) {
      searchString = queryString;
    }

    // file format
    for (const format in fileFormat) {
      if (fileFormat[format] && format !== "anyFormat") {
        searchString += ` filetype:${format}`;
      }
    }

    // date range
    const date = new Date();
    const todayDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    let searchDate;
    for (const datePeriod in datePublished) {
      if (datePublished[datePeriod] && datePeriod !== "anytime") {
        if (datePeriod === "pastYear") {
          searchDate = `${date.getFullYear() - 1}-${
            date.getMonth() + 1
          }-${date.getDate()}`;
          searchString += ` after:${searchDate}`;
        } else if (datePeriod === "pastMonth") {
          date.setMonth(date.getMonth() - 1);
          searchDate = `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`;
          searchString += ` after:${searchDate}`;
        }
      }
    }

    console.log(`search string: ${searchString}`);
    const searchUrl = `https://www.google.com/search?q=${searchString}`;

    if (searchString) {
      //   window.location.href = searchUrl;
      window.open(searchUrl, "_blank");
    }
  };

  return [submitQuery];
};
