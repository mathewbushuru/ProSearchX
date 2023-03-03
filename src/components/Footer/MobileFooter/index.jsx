import React from "react";

import styles from "./MobileFooter.module.css";

export const MobileFooter = () => {
  return (
    <div className={styles.mobileFooter}>
      <div className={styles.footerCountry}>Canada</div>
      <div className={styles.topFooterRow}>
        <span>Dark theme: off</span>
        <span>
          <a
            href="https://github.com/mathewbushuru/ProSearchX"
            target="_blank"
            rel="noreferrer"
          >
            Settings
          </a>
        </span>
        <span>
          <a
            href="https://github.com/mathewbushuru/ProSearchX"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
        </span>
        <span>
          <a
            href="https://github.com/mathewbushuru/ProSearchX"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
        </span>
      </div>
    </div>
  );
};
