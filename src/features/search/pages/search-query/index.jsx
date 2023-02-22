// This page is also the global error page
// After encountering any unhandled errors, automatically redirect here

import { useRouteError } from "react-router-dom";
import { CgSearch as SearchIcon } from "react-icons/cg";
import { BiMicrophone as Microphone } from "react-icons/bi";
import { BsCamera as Camera } from "react-icons/bs";

import { MainLayout } from "layouts";
import { PrimaryButton } from "components/UI";
import { MobileTrendingSearches } from "features/search/components";

import { useWindowDimensions } from "hooks/ui_hooks";

import styles from "./SearchQueryPage.module.css";

import googleLogo from "assets/logo.png";

export const SearchQueryPage = () => {
  const { width } = useWindowDimensions();

  const error = useRouteError();
  error && console.error(error);

  return (
    <MainLayout>
      <div className={styles.searchQueryPage}>
        {error && (
          <div>Unexpected error: {error.statusText || error.message}</div>
        )}
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
            <Microphone className={styles.microphoneIcon} />
            <Camera className={styles.cameraIcon} />
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
          <div className={styles.trendingSearches}>
            {width < 501 && <MobileTrendingSearches />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
