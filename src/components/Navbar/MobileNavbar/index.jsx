import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";

import { toggleSaveOptionsAction } from "features/search/stores/preferencesHistorySlice";

import styles from "./MobileNavbar.module.css";

export const MobileNavbar = () => {
  const saveOptionsFlag = useSelector(
    (state) => state.preferencesHistory.saveOptions
  );
  const dispatch = useDispatch();

  return (
    <header className={styles.mobileNavbar}>
      <div className={styles.navLeft}>
        <Hamburger className={`${styles.navItem} ${styles.navIcon}`} />
        <span className={`${styles.navItem} ${styles.navItemActive}`}>All</span>
        <Link to="/images">
          <span className={`${styles.navItem}`}>Images</span>
        </Link>
      </div>
      <div
        className={styles.navRight}
        onClick={() => dispatch(toggleSaveOptionsAction())}
      >
        <label htmlFor="rememberOptions">
          <span className={`${styles.navItem} ${styles.checkboxLabel}`}>
            Save Options
          </span>
        </label>
        <input
          type="checkbox"
          name="rememberOptions"
          id="rememberOptions"
          value={saveOptionsFlag}
          defaultChecked={saveOptionsFlag}
          className={`${styles.navItem} ${styles.checkbox}`}
        />
      </div>
    </header>
  );
};
