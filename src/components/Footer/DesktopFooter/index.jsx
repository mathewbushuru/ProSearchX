import React from "react";

import styles from "./DesktopFooter.module.css";

export const DesktopFooter = () => {
  return (
    <div className={styles.desktopFooter}>
      {/* <div className={styles.footerCountry}>Canada</div> */}
      <div className={styles.footerRow}>
        <div className={styles.leftFooterRow}>
          <span>Dark theme: off</span>
        </div>
        <div className={styles.rightFooterRow}>
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
    </div>
  );
};
