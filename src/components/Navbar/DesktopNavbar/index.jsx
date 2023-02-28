import { Link } from "react-router-dom";
import { IoApps as AppDrawer } from "react-icons/io5";

import styles from "./DesktopNavbar.module.css";

export const DesktopNavbar = () => {
  return (
    <header className={styles.desktopNavbar}>
      <div className={styles.navLeft}>
        <a
          href="https://github.com/mathewbushuru/ProSearchX"
          target="_blank"
          rel="noreferrer"
        >
          <span className={`${styles.navItem}`}>About</span>
        </a>
        <Link to="/images">
          <span className={`${styles.navItem}`}>Images</span>
        </Link>
      </div>
      <div className={styles.navRight}>
        <label htmlFor="rememberOptions">
          <span className={`${styles.navItem} ${styles.checkboxLabel}`}>
            Remember my options
          </span>
        </label>
        <input
          type="checkbox"
          name="rememberOptions"
          id="rememberOptions"
          value={true}
          defaultChecked={true}
          className={`${styles.navItem} ${styles.checkbox}`}
        />
        {/* <AppDrawer className={`${styles.navItem} ${styles.navIcon}`} /> */}
      </div>
    </header>
  );
};
