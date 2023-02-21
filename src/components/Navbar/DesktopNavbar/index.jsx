import { IoApps as AppDrawer } from "react-icons/io5";

import styles from "./DesktopNavbar.module.css";

export const DesktopNavbar = () => {
  return (
    <header className={styles.desktopNavbar}>
      <div className={styles.navLeft}>
        <span className={`${styles.navItem}`}>About</span>
        <span className={`${styles.navItem}`}>Store</span>
      </div>
      <div className={styles.navRight}>
      <span className={`${styles.navItem}`}>Gmail</span>
        <span className={`${styles.navItem}`}>Images</span>
        <AppDrawer className={`${styles.navItem} ${styles.navIcon}`} />
        <button className={`${styles.navItem} ${styles.primaryButton}`}>
          Sign in
        </button>
      </div>
    </header>
  );
};
