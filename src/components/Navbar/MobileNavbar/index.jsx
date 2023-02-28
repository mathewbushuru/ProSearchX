import { Link } from "react-router-dom";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";

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
        <label htmlFor="rememberOptions">
          <span className={`${styles.navItem} ${styles.checkboxLabel}`}>
            Save Options
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
      </div>
    </header>
  );
};
