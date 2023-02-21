import { CgSearch as SearchIcon } from "react-icons/cg";

import { MainLayout } from "layouts";
import { PrimaryButton } from "components/UI";

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
          <div className={styles.searchButtons}>
            <PrimaryButton className={styles.transparentButton}>
              Google Search
            </PrimaryButton>
            <PrimaryButton className={styles.transparentButton}>
              I'm Feeling Lucky
            </PrimaryButton>
          </div>
          <div className={styles.otherLanguages}>
            Google offered in: <span> Français</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
