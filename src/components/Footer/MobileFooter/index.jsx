import React from "react";

import styles from "./MobileFooter.module.css";

export const MobileFooter = () => {
  return (
    <div className={styles.mobileFooter}>
      <div className={styles.footerCountry}>Canada</div>
      <div className={styles.topFooterRow}>
        <span>Dark theme: off</span>
        <span>Settings</span>
        <span>Privacy</span>
        <span>Terms</span>
      </div>
      <div className={styles.bottomFooterRow}>
        <span>Advertising</span>
        <span>Business</span>
        <span>About</span>
      </div>
    </div>
  );
};
