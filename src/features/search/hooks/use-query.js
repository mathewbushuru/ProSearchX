import { useSelector } from "react-redux";

export const useQuery = () => {
  const shownWebsites = useSelector((state) => state.ui.shownWebsites);
  const datePublished = useSelector((state) => state.ui.datePublished);
  const fileFormat = useSelector((state) => state.ui.fileFormat);
  const exactWords = useSelector((state) => state.ui.exactWords);
  const similarWords = useSelector((state) => state.ui.similarWords);
  const excludeWords = useSelector((state) => state.ui.excludeWords);

  const queryString = useSelector((state) => state.query.queryString);

  const newTab = useSelector((state) => state.settings.newTab);

  const submitQuery = () => {
    console.log("Submitting query");
    console.log(`query string: ${queryString}`);

    let searchString = queryString;

    //exact words
    if (exactWords.length) {
      searchString += ` "${exactWords}"`;
    }

    //similar words
    if (similarWords) {
      searchString += ` ${similarWords.split(",").join(" OR ")}`;
    }

    //exclude words
    console.log(excludeWords.split(","));
    if (excludeWords) {
      let excludeWordsArr = excludeWords.split(",");
      for (let word of excludeWordsArr) {
        searchString += ` -"${word}"`;
      }
    }

    // websites
    let searchStringPreweb = searchString;
    for (const website in shownWebsites) {
      if (shownWebsites[website] && website !== "all") {
        searchString += ` site:${website}.com OR`;
      }
    }
    searchString = searchString.substring(0, searchString.length - 3);
    if (shownWebsites.all) {
      searchString = searchStringPreweb;
    }

    // file format
    for (const format in fileFormat) {
      if (fileFormat[format] && format !== "anyFormat") {
        searchString += ` filetype:${format}`;
      }
    }

    // date range
    const date = new Date();
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
        } else if (datePeriod === "pastWeek") {
          date.setDate(date.getDate() - 7);
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
      if (newTab) {
        window.open(searchUrl, "_blank");
      } else {
        window.location.href = searchUrl;
      }
    }
  };

  return [submitQuery];
};
