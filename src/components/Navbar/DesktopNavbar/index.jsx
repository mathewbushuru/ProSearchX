import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleNewTabAction } from "features/search/stores/settingsSlice";

import styles from "./DesktopNavbar.module.css";

export const DesktopNavbar = () => {
  const dispatch = useDispatch();

  const newTab = useSelector((state) => state.settings.newTab);

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
            Results in new tab
          </span>
        </label>
        <input
          type="checkbox"
          name="rememberOptions"
          id="rememberOptions"
          checked={newTab}
          onChange={() => dispatch(toggleNewTabAction())}
          className={`${styles.navItem} ${styles.checkbox}`}
        />
      </div>
    </header>
  );
};
