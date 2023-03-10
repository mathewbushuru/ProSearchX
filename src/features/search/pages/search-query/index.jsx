import { useRouteError, Form, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CgSearch as SearchIcon } from "react-icons/cg";
import { BiMicrophone as Microphone } from "react-icons/bi";
import { BsCamera as Camera } from "react-icons/bs";

import { MainLayout } from "layouts";
import { PrimaryButton } from "components/UI";
import {
  MobileSearchPreferences,
  DesktopSearchPreferences,
} from "features/search/components/SearchPreferences";

import { useWindowDimensions } from "hooks/ui_hooks";
import { useQuery } from "features/search/hooks";

import { modifyQueryAction } from "features/search/stores/querySlice";
import { resetOptionsAction } from "features/search/stores/uiSlice";

import styles from "./SearchQueryPage.module.css";

import googleLogo from "assets/google-logo.png";
import logo from "assets/logo5.png";

export const SearchQueryPage = () => {
  const { width } = useWindowDimensions();

  const error = useRouteError();
  error && console.error(error);

  const dispatch = useDispatch();
  const queryString = useSelector((state) => state.query.queryString);

  const [submitQuery] = useQuery();

  return (
    <MainLayout>
      <div className={styles.searchQueryPage}>
        <div className={styles.main}>
          <div className={styles.stickySearchbar}>
            {error && (
              <div>Unexpected error: {error.statusText || error.message}</div>
            )}
            <div className={styles.logoWrapper}>
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

            <Form className={styles.searchForm} onSubmit={submitQuery}>
              <input
                type="search"
                name="q"
                id="search_query"
                autoFocus={false}
                value={queryString}
                onInput={(e) => {
                  dispatch(modifyQueryAction(e.target.value));
                }}
              />
              <SearchIcon className={styles.searchIcon} onClick={submitQuery} />
              <Microphone className={styles.microphoneIcon} />
              <Camera className={styles.cameraIcon} />
            </Form>

            <div className={styles.otherLanguages}>
              <span onClick={submitQuery}>Search Now</span> or{" "}
              <span onClick={() => dispatch(resetOptionsAction())}>
                {" "}
                Clear Options
              </span>
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
              <PrimaryButton
                className={styles.mobileSearchButton}
              >
                <Link to="/advanced">Advanced Search</Link>
              </PrimaryButton>
            </div>
            <div className={styles.searchButtons}>
              <PrimaryButton
                className={styles.transparentButton}
                onClick={submitQuery}
              >
                Google Search
              </PrimaryButton>
              {/* <PrimaryButton className={styles.transparentButton}>
                <Link to="/advanced">Advanced Search</Link>
              </PrimaryButton> */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
