import { MobileNavbar } from "components/Navbar";

import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  return (
    <>
      <MobileNavbar />
      {children}
    </>
  );
};
