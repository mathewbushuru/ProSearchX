import React from "react";

import styles from "./DesktopFooter.module.css";

export const DesktopFooter = () => {
  return (
    <div className={styles.desktopFooter}>
      <div className={styles.footerCountry}>Canada</div>
      <div className={styles.footerRow}>
        <div className={styles.leftFooterRow}>
          <span>Advertising</span>
          <span>Business</span>
          <span>How Search works</span>
        </div>
        <div className={styles.rightFooterRow}>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};
