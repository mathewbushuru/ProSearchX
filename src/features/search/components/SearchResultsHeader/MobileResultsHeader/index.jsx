import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";
import { BsPersonCircle as PersonIcon } from "react-icons/bs";

import { SearchForm } from "features/search/components";

import styles from "./MobileHeader.module.css";

import googleLogo from "assets/logo.png";

export const MobileSearchResultsHeader = () => {
  const navigate = useNavigate();

  const searchTypeOptions = [
    "All",
    "News",
    "Maps",
    "Images",
    "Videos",
    "Shopping",
    "Books",
    "Flights",
    "Finance",
  ];

  return (
    <header className={styles.mobileHeader}>
      <div className={styles.mobileNavbar}>
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
      </div>
      <SearchForm />
      <div className={styles.searchTypeContainer}>
        {searchTypeOptions.map((searchType, index) => (
          <div key={index} className={styles.searchType}>
            {searchType}
          </div>
        ))}
        <div className={`${styles.searchType} ${styles.searchTools}`}>
          Search tools
        </div>
      </div>
    </header>
  );
};
