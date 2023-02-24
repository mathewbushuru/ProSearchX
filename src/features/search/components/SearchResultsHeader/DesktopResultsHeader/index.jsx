import { Link, useNavigate } from "react-router-dom";
import { IoApps as AppDrawerIcon } from "react-icons/io5";
import { IoSettingsOutline as SettingsIcon } from "react-icons/io5";
import { CgSearch as SearchIcon } from "react-icons/cg";
import { BiNews as NewsIcon } from "react-icons/bi";
import { SiGooglemaps as MapsIcon } from "react-icons/si";
import { MdOutlineImageSearch as ImageIcon } from "react-icons/md";
import { RxVideo as VideoIcon } from "react-icons/rx";
import { MdOutlineMoreVert as MoreIcon } from "react-icons/md";

import { PrimaryButton } from "components/UI";
import { SearchForm } from "features/search/components";

import styles from "./DesktopHeader.module.css";

import googleLogo from "assets/logo.png";

export const DesktopSearchResultsHeader = () => {
  const navigate = useNavigate();

  const searchTypeOptions = [
    { icon: SearchIcon, title: "All" },
    { icon: NewsIcon, title: "News" },
    { icon: MapsIcon, title: "Maps" },
    { icon: ImageIcon, title: "Images" },
    { icon: VideoIcon, title: "Videos" },
    { icon: MoreIcon, title: "More" },
  ];

  return (
    <header className={styles.desktopHeader}>
      <div className={styles.desktopNavbar}>
        <div className={styles.navLeft}>
          <img
            src={googleLogo}
            alt="Google Logo"
            className={`${styles.navItem} ${styles.logoImage}`}
            onClick={() => {
              navigate("/");
            }}
          />
          <SearchForm className={styles.searchForm} desktopMode={true} />
        </div>
        <div className={styles.navRight}>
          <SettingsIcon className={`${styles.navItem} ${styles.navIcon}`} />
          <AppDrawerIcon className={`${styles.navItem} ${styles.navIcon}`} />
          <PrimaryButton className={styles.navItem}>
            <Link to="/auth">Sign in</Link>
          </PrimaryButton>
        </div>
      </div>

      <div className={styles.searchTypeContainer}>
        <div className={styles.searchTypeOptions}>
          {searchTypeOptions.map((searchType, index) => (
            <div key={index} className={styles.searchType}>
              {searchType.icon()} {searchType.title}
            </div>
          ))}
        </div>
        <div className={`${styles.searchType} ${styles.searchTools}`}>
          Tools
        </div>
      </div>
    </header>
  );
};
