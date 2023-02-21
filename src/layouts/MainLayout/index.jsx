import { MobileNavbar } from "components/Navbar";

import { useWindowDimensions } from "hooks/ui_hooks";

import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  const { width, height } = useWindowDimensions();
  console.log(width)
  return (
    <>
      <MobileNavbar />
      {children}
    </>
  );
};
