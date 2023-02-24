import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import { SearchResultsLayout } from "features/search/layouts";

import { searchApi } from "features/search/api/search-api";

export const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("q");

  if (searchQuery.length === 0) {
    return (
      <SearchResultsLayout>
        Sorry, could not complete your request because of an empty search
        string. <br />
        <Link to="/">Back to query page</Link>
      </SearchResultsLayout>
    );
  }

  const searchResults = searchApi(searchQuery);

  return (
    <SearchResultsLayout>
      <p>
        <i style={{ color: "red" }}>
          ( To protect my scraping rate limit, I have turned search off and i'm
          using a cached previous query('ubc'). I promise I'll search{" "}
          <strong>{searchQuery}</strong> for you later. If you are looking at
          the code, you can turn it back on at /src/config/index.js by changing
          SEARCH_ON from false to true)
        </i>
      </p>

      {searchResults.map((page, pageNumber) => (
        <div key={pageNumber}>
          <h1>Page {pageNumber + 1}</h1>
          <p>
            <strong>Search results:</strong> About {page.estimatedResultCount}{" "}
            results
          </p>
          {page.items.map((result, index) => (
            <div key={index}>
              <h3>{result.title}</h3>
              <a href={result.link}>{result.displayLink}</a>
              <p>{result.snippet}</p>
              <hr />
            </div>
          ))}
        </div>
      ))}
      <Link to="/">Back to query page</Link>
    </SearchResultsLayout>
  );
};
