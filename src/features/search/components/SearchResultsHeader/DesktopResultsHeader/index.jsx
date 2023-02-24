import { Link, useNavigate } from "react-router-dom";
import { IoApps as AppDrawerIcon } from "react-icons/io5";
import { IoSettingsOutline as SettingsIcon } from "react-icons/io5";

import { PrimaryButton } from "components/UI";
import { SearchForm } from "features/search/components";

import styles from "./DesktopHeader.module.css";

import googleLogo from "assets/logo.png";

export const DesktopSearchResultsHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.desktopHeader}>
      <div className={styles.desktopNavbar}>
        <div className={styles.navLeft}>
          <img
            src={googleLogo}
            alt="Google Logo"
            className={`${styles.navItem} ${styles.logoImage}`}
            onClick={() => {
              navigate("/");
            }}
          />
          <SearchForm className={styles.searchForm} desktopMode={true} />
        </div>
        <div className={styles.navRight}>
          <SettingsIcon className={`${styles.navItem} ${styles.navIcon}`} />
          <AppDrawerIcon className={`${styles.navItem} ${styles.navIcon}`} />
          <PrimaryButton className={styles.navItem}>
            <Link to="/auth">Sign in</Link>
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
};
