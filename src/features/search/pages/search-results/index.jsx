import { useSearchParams } from "react-router-dom";
import { BiWorld as LinkIcon } from "react-icons/bi";

import { searchApi } from "features/search/api/search-api";
import { SEARCH_ON } from "config";

import { SearchResultsLayout } from "features/search/layouts";

import styles from "./SearchResultsPage.module.css";

export const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("q");

  if (searchQuery.trim().length === 0) {
    return (
      <SearchResultsLayout>
        <div className={`code ${styles.emptyErrorMessageContainer}`}>
          <p>
            Sorry, could not complete your request because of an empty search
            string.
          </p>
        </div>
      </SearchResultsLayout>
    );
  }

  const searchResults = searchApi(searchQuery);

  return (
    <SearchResultsLayout>
      <div className={styles.searchResultsContainer}>
        {searchResults.map((page, pageNumber) => (
          <div key={pageNumber}>
            {!SEARCH_ON && (
              <div
                className={`code ${styles.searchResult} ${styles.codeDisclaimer}`}
              >
                <p>
                  [To protect my scraping rate limit, I have turned search off
                  and I'm using a cached previous query('ubc'). If you are
                  looking at the code, you can turn it back on at
                  /src/config/index.js by changing SEARCH_ON from false to true]
                </p>
              </div>
            )}
            {/* <h1 className="code">Page {pageNumber + 1}</h1> */}
            {/* <p>About {page.estimatedResultCount} results</p> */}
            {page.items.map((result, index) => (
              <div key={index} className={styles.searchResult}>
                <div className={styles.searchResultLinks}>
                  <LinkIcon className={styles.linkIcon} />
                  <div>
                    <div className={styles.displayLink}>
                      <a href={result.link}>{result.displayLink}</a>
                    </div>
                    <div className={styles.link}>
                      <a href={result.link}>{result.link}</a>
                    </div>
                  </div>
                </div>

                <div className={styles.searchResultDetails}>
                  <h3>{result.title}</h3>
                  <p>{result.snippet}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </SearchResultsLayout>
  );
};
