import { Link, Form } from "react-router-dom";
import { MdOutlineMoreVert as MoreIcon } from "react-icons/md";
import { TbTrendingUp as TrendingIcon } from "react-icons/tb";
import { FaGlobeAmericas as GlobalIcon } from "react-icons/fa";
import { FaRedditAlien as RedditIcon } from "react-icons/fa";
import { FaStackOverflow as StackOverflowIcon } from "react-icons/fa";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { IoAddOutline as AddIcon } from "react-icons/io5";

import styles from "./MobileSearchPreferences.module.css";

const DUMMY_TRENDING_SEARCH_ITEMS = [
  { title: "SpaceX starship launch", desc: null },
  { title: "david geffen", desc: "American business magnate" },
  { title: "Apple iphone 15 pro max", desc: null },
];

export const MobileSearchPreferences = () => {
  return (
    <>
      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>Websites to search</p>
          <MoreIcon className={styles.moreIcon} />
        </div>
        <div className={styles.websiteOptions}>
          <div
            className={`${styles.websiteOptionIconWrapper} ${styles.selectedWebsiteOption}`}
          >
            <GlobalIcon className={styles.websiteOptionIcon} />
          </div>
          <div className={styles.websiteOptionIconWrapper}>
            <RedditIcon className={styles.websiteOptionIcon} />
          </div>
          <div className={styles.websiteOptionIconWrapper}>
            <StackOverflowIcon className={styles.websiteOptionIcon} />
          </div>
          <div className={styles.websiteOptionIconWrapper}>
            <TwitterIcon className={styles.websiteOptionIcon} />
          </div>
          <div className={styles.websiteOptionIconWrapper}>
            <AddIcon className={styles.websiteOptionIcon} />
          </div>
        </div>
      </div>

      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>Date published</p>
          <MoreIcon className={styles.moreIcon} />
        </div>
        <Form className={styles.dateOptions}>
          <div>
            <input
              type="radio"
              id="date_anytime"
              name="dateOption"
              defaultChecked={true}
            />
            <label htmlFor="date_anytime">Any time</label>
          </div>
          <div>
            <input type="radio" id="date_year" name="dateOption" />
            <label htmlFor="date_year">Past year</label>
          </div>
          <div>
            <input type="radio" name="dateOption" id="date_month" />
            <label htmlFor="date_month">Past month</label>
          </div>
          <div>
            <input type="radio" name="dateOption" id="date_week" />
            <label htmlFor="date_week">Past week</label>
          </div>
        </Form>
      </div>

      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>File format</p>
          <MoreIcon className={styles.moreIcon} />
        </div>
        <Form className={styles.fileOptions}>
          <div>
            <input
              type="radio"
              id="file_anytime"
              name="fileOption"
              defaultChecked={true}
            />
            <label htmlFor="file_anytime">Any format</label>
          </div>
          <div>
            <input type="radio" id="file_pdf" name="fileOption" />
            <label htmlFor="file_pdf">.pdf</label>
          </div>
          <div>
            <input type="radio" name="fileOption" id="file_zip" />
            <label htmlFor="file_zip">.zip</label>
          </div>
          <div>
            <input type="radio" name="fileOption" id="file_pptx" />
            <label htmlFor="file_pptx">.pptx</label>
          </div>
          <div>
            <input type="radio" name="fileOption" id="file_docx" />
            <label htmlFor="file_docx">.docx</label>
          </div>
        </Form>
      </div>

      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>Exclude false positives</p>
          <MoreIcon className={styles.moreIcon} />
        </div>
        <div className={styles.trendingSearchList}>
          {DUMMY_TRENDING_SEARCH_ITEMS.map((searchItem, index) => (
            <TrendingSearchRow
              key={index}
              title={searchItem.title}
              description={searchItem.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

function TrendingSearchRow({ title, description = null }) {
  return (
    <div className={styles.trendingSearchRow}>
      <TrendingIcon className={styles.trendingIcon} />
      <div className={styles.queryContent}>
        <Link to={`/search?q=${title}`}>
          <p>{title}</p>
          {description && <p className={styles.description}>{description}</p>}
        </Link>
      </div>
    </div>
  );
}
