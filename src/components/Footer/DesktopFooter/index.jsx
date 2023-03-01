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
          <span>Settings</span>
          <span>Privacy</span>
          <span>About</span>
        </div>
      </div>
    </div>
  );
};
