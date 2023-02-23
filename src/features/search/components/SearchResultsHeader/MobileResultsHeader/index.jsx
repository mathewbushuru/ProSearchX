import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";
import { BsPersonCircle as PersonIcon } from "react-icons/bs";

import styles from "./MobileHeader.module.css";

import googleLogo from "assets/logo.png";

export const MobileSearchResultsHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.mobileNavbar}>
      <div className={styles.navLeft}>
        <Hamburger className={`${styles.navItem} ${styles.navIcon}`} />
      </div>
      <img
        src={googleLogo}
        alt="Google Logo"
        className={`${styles.navItem} ${styles.logoImage}`}
        onClick={() => {
          navigate("/");
        }}
      />
      <div className={styles.navRight}>
        <Link to="/auth">
          <PersonIcon className={`${styles.navItem} ${styles.personIcon}`} />
        </Link>
      </div>
    </header>
  );
};
