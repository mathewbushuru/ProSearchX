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
        <span className={`${styles.navItem}`}>Images</span>
      </div>
      <div className={styles.navRight}>
        <AppDrawer className={`${styles.navItem} ${styles.navIcon}`} />
        <PrimaryButton className={styles.navItem}>Sign in</PrimaryButton>
      </div>
    </header>
  );
};
