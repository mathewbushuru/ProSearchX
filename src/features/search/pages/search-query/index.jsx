import { CgSearch as SearchIcon } from "react-icons/cg";

import { MainLayout } from "layouts";

import styles from "./SearchQueryPage.module.css";

import googleLogo from "assets/logo.png";

export const SearchQueryPage = () => {
  return (
    <MainLayout>
      <div className={styles.searchQueryPage}>
        <div className={styles.logoWrapper}>
          <img
            src={googleLogo}
            alt="Google Logo"
            className={styles.logoImage}
          />
        </div>
        <div className={styles.main}>
          <form className={styles.searchForm} action="">
            <input type="search" name="search_query" id="search_query" />
            <SearchIcon className={styles.searchIcon} />
          </form>
          <div className={styles.otherLanguages}>
            Google offered in: <span> Français</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
