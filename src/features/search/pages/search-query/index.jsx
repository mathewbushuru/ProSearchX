// This page is also the global error page
// After encountering any unhandled errors, automatically redirect here

import { useRef } from "react";
import {
  useRouteError,
  Form,
  Link,
  useSubmit,
  useNavigate,
} from "react-router-dom";
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

import styles from "./SearchQueryPage.module.css";

import googleLogo from "assets/google-logo.png";
import logo from "assets/logo5.png";

export const SearchQueryPage = () => {
  const { width } = useWindowDimensions();

  const error = useRouteError();
  error && console.error(error);

  const searchFormRef = useRef();
  const submit = useSubmit();

  // window.document.addEventListener("keydown", (event) => {
  //   if (event.code === "Enter") {
  //     submit(searchFormRef.current);
  //   }
  // });

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

            <Form
              className={styles.searchForm}
              action="/search"
              method="get"
              ref={searchFormRef}
            >
              <input
                type="search"
                name="q"
                id="search_query"
                autoFocus={false}
              />
              <SearchIcon
                className={styles.searchIcon}
                onClick={() => submit(searchFormRef.current)}
              />
              <Microphone className={styles.microphoneIcon} />
              <Camera className={styles.cameraIcon} />
            </Form>

            <div className={styles.otherLanguages}>
              Change Options or{" "}
              <span onClick={() => submit(searchFormRef.current)}>
                {" "}
                Search Now
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
                onClick={() => submit(searchFormRef.current)}
              >
                Search
              </PrimaryButton>
              <PrimaryButton
                onClick={() => submit(searchFormRef.current)}
                className={styles.mobileSearchButton}
              >
                <Link to="/images">Advanced Search</Link>
              </PrimaryButton>
            </div>
            <div className={styles.searchButtons}>
              <PrimaryButton
                className={styles.transparentButton}
                onClick={() => submit(searchFormRef.current)}
              >
                Google Search
              </PrimaryButton>
              <PrimaryButton className={styles.transparentButton}>
                <Link to="/images">Advanced Search</Link>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
