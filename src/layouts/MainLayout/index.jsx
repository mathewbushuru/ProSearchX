import { MobileNavbar, DesktopNavbar } from "components/Navbar";

import { useWindowDimensions } from "hooks/ui_hooks";

import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {width < 501 ? <MobileNavbar /> : <DesktopNavbar />}
      {children}
    </>
  );
};
