import { Link } from "react-router-dom";
import { IoApps as AppDrawer } from "react-icons/io5";

import { PrimaryButton } from "components/UI";

import styles from "./DesktopNavbar.module.css";

export const DesktopNavbar = () => {
  return (
    <header className={styles.desktopNavbar}>
      <div className={styles.navLeft}>
        <Link to="/about">
          <span className={`${styles.navItem}`}>About</span>
        </Link>
        <Link to="/store">
          <span className={`${styles.navItem}`}>Store</span>
        </Link>
      </div>
      <div className={styles.navRight}>
        <Link to="/gmail">
          <span className={`${styles.navItem}`}>Gmail</span>
        </Link>
        <Link to="/images">
          <span className={`${styles.navItem}`}>Images</span>
        </Link>
        <AppDrawer className={`${styles.navItem} ${styles.navIcon}`} />
        <PrimaryButton className={styles.navItem}>
          <Link to="/auth">Sign in</Link>
        </PrimaryButton>
      </div>
    </header>
  );
};
