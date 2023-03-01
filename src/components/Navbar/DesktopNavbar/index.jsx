import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleSaveOptionsAction } from "features/search/stores/preferencesHistorySlice";

import styles from "./DesktopNavbar.module.css";

export const DesktopNavbar = () => {
  const saveOptionsFlag = useSelector(
    (state) => state.preferencesHistory.saveOptions
  );
  const dispatch = useDispatch();

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
      <div
        className={styles.navRight}
        onClick={() => dispatch(toggleSaveOptionsAction())}
      >
        <label htmlFor="rememberOptions">
          <span className={`${styles.navItem} ${styles.checkboxLabel}`}>
            Remember my options
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
