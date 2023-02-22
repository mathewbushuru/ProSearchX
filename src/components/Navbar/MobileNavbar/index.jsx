import { Link } from "react-router-dom";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";
import { IoApps as AppDrawer } from "react-icons/io5";

import { PrimaryButton } from "components/UI";

import styles from "./MobileNavbar.module.css";

export const MobileNavbar = () => {
  return (
    <header className={styles.mobileNavbar}>
      <div className={styles.navLeft}>
        <Hamburger className={`${styles.navItem} ${styles.navIcon}`} />
        <span className={`${styles.navItem} ${styles.navItemActive}`}>All</span>
        <Link to="/images">
          <span className={`${styles.navItem}`}>Images</span>
        </Link>
      </div>
      <div className={styles.navRight}>
        <AppDrawer className={`${styles.navItem} ${styles.navIcon}`} />
        <PrimaryButton className={styles.navItem}>
          <Link to="/auth">Sign in</Link>
        </PrimaryButton>
      </div>
    </header>
  );
};
