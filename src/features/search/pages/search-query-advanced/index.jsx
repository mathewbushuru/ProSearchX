import { useRouteError, useNavigate, Form, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";

import { PrimaryButton } from "components/UI";
import {
  MobileSearchPreferences,
  DesktopSearchPreferences,
} from "features/search/components/SearchPreferences";
import { SearchForm } from "features/search/components";

import { useWindowDimensions } from "hooks/ui_hooks";
import { useQuery } from "features/search/hooks";

import { resetOptionsAction } from "features/search/stores/uiSlice";
import { toggleNewTabAction } from "features/search/stores/settingsSlice";

import styles from "./SearchQueryAdvancedPage.module.css";

import googleLogo from "assets/google-logo.png";
import logo from "assets/logo5.png";
import { useEffect } from "react";

const searchTypeOptions = [
  "All",
  "News",
  "Maps",
  "Images",
  "Videos",
  "Shopping",
  "Books",
  "Flights",
  "Finance",
];

export const SearchQueryAdvancedPage = () => {
  const { width } = useWindowDimensions();

  const error = useRouteError();
  error && console.error(error);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const newTab = useSelector((state) => state.settings.newTab);

  const [submitQuery] = useQuery();
  useEffect(() => {
    if (width > 501) {
      navigate("/");
    }
  }, [width, navigate]);

  return (
    <>
      <div className={styles.searchQueryPage}>
        <div className={styles.main}>
          <div className={styles.stickySearchbar}>
            {error && (
              <div>Unexpected error: {error.statusText || error.message}</div>
            )}
            <div className={styles.nav}>
              <Hamburger className={`${styles.navIcon}`} />
              <div
                className={styles.logoWrapper}
                onClick={() => {
                  navigate("/");
                }}
              >
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  className={styles.googleLogoImage}
                />
                <img
                  src={logo}
                  alt="ProSearch Logo"
                  className={styles.prosearchLogoImage}
                />
              </div>
              <SearchForm className={styles.desktopSearchForm} />
              <input
                type="checkbox"
                name="rememberOptions"
                id="rememberOptions"
                checked={newTab}
                className={`${styles.checkbox}`}
                onChange={() => dispatch(toggleNewTabAction())}
              />
            </div>

            <SearchForm className={styles.mobileSearchForm} />

            <div className={styles.otherLanguages}>
              <span onClick={submitQuery}>Search Now</span> or{" "}
              <span onClick={() => dispatch(resetOptionsAction())}>
                {" "}
                Clear Options
              </span>
            </div>

            <div className={styles.searchTypeContainer}>
              {searchTypeOptions.map((searchType, index) => (
                <div key={index} className={styles.searchType}>
                  {searchType}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.nonStickyContent}>
            <div className={styles.searchPreferences}>
              {width < 501 && <MobileSearchPreferences />}
              {width > 500 && <DesktopSearchPreferences />}
            </div>
            <div className={styles.mobileSearchButtons}>
              <PrimaryButton
                className={styles.mobileSearchButton}
                onClick={submitQuery}
              >
                Search
              </PrimaryButton>
              {/* <PrimaryButton
                onClick={submitQuery}
                className={styles.mobileSearchButton}
              >
                <Link to="/images">Advanced Search</Link>
              </PrimaryButton> */}
            </div>
            <div className={styles.searchButtons}>
              <PrimaryButton
                className={styles.transparentButton}
                onClick={submitQuery}
              >
                Google Search
              </PrimaryButton>
              {/* <PrimaryButton className={styles.transparentButton}>
                <Link to="/images">Advanced Search</Link>
              </PrimaryButton> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
