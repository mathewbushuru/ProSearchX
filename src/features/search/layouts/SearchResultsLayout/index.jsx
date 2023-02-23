import { DesktopNavbar } from "components/Navbar";
import { MobileSearchResultsHeader } from "features/search/components";
import { MobileFooter, DesktopFooter } from "components/Footer";

import { useWindowDimensions } from "hooks/ui_hooks";

import styles from "./SearchResultsLayout.module.css";

export const SearchResultsLayout = ({ children }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.mainLayout}>
      {width < 501 ? <MobileSearchResultsHeader /> : <DesktopNavbar />}
      <div className={styles.content}>{children}</div>
      {width < 501 ? <MobileFooter /> : <DesktopFooter />}
    </div>
  );
};
