import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";

import { toggleNewTabAction } from "features/search/stores/settingsSlice";

import styles from "./MobileNavbar.module.css";

export const MobileNavbar = () => {
  const dispatch = useDispatch();

  const newTab = useSelector((state) => state.settings.newTab);

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
            New tab
          </span>
        </label>
        <input
          type="checkbox"
          name="rememberOptions"
          id="rememberOptions"
          checked={newTab}
          className={`${styles.navItem} ${styles.checkbox}`}
          onChange={() => dispatch(toggleNewTabAction())}
        />
      </div>
    </header>
  );
};
