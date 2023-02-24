import { Form, useSearchParams } from "react-router-dom";
import { CgSearch as SearchIcon } from "react-icons/cg";

import styles from "./SearchForm.module.css";

export const SearchForm = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("q");
  return (
    <Form className={styles.searchForm} action="/search" method="get">
      <input type="search" name="q" id="search_query" defaultValue={searchQuery} />
      <SearchIcon className={styles.searchIcon} />
    </Form>
  );
};
