import { Link, Form } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { MdOutlineMoreVert as MoreIcon } from "react-icons/md";
import { FaGlobeAmericas as GlobalIcon } from "react-icons/fa";
import { FaRedditAlien as RedditIcon } from "react-icons/fa";
import { FaStackOverflow as StackOverflowIcon } from "react-icons/fa";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { IoAddOutline as AddIcon } from "react-icons/io5";

import {
  changeWebsiteAction,
  changeDateAction,
  changeFileAction,
  changeExactWordsAction,
  changeSimilarWordsAction,
  changeExcludeWordsAction,
} from "features/search/stores/uiSlice";
import { addWebsiteAction } from "features/search/stores/querySlice";

import styles from "./DesktopSearchPreferences.module.css";

export const DesktopSearchPreferences = () => {
  const dispatch = useDispatch();

  const shownWebsites = useSelector((state) => state.ui.shownWebsites);
  const datePublished = useSelector((state) => state.ui.datePublished);
  const fileFormat = useSelector((state) => state.ui.fileFormat);
  const exactWords = useSelector((state) => state.ui.exactWords);
  const similarWords = useSelector((state) => state.ui.similarWords);
  const excludeWords = useSelector((state) => state.ui.excludeWords);

  return (
    <div className={styles.searchPreferences}>
      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>Websites to search</p>
          {/* <MoreIcon className={styles.moreIcon} /> */}
        </div>
        <div className={styles.websiteOptions}>
          <div
            className={`${styles.websiteOptionIconWrapper} ${
              shownWebsites.all ? styles.selectedWebsiteOption : ""
            }`}
            onClick={() => dispatch(changeWebsiteAction("all"))}
          >
            <GlobalIcon className={styles.websiteOptionIcon} />
          </div>
          <div
            className={`${styles.websiteOptionIconWrapper} ${
              shownWebsites.reddit ? styles.selectedWebsiteOption : ""
            }`}
            onClick={() => {
              dispatch(changeWebsiteAction("reddit"));
              dispatch(addWebsiteAction("reddit"));
            }}
          >
            <RedditIcon className={styles.websiteOptionIcon} />
          </div>
          <div
            className={`${styles.websiteOptionIconWrapper} ${
              shownWebsites.stackOverflow ? styles.selectedWebsiteOption : ""
            }`}
            onClick={() => {
              dispatch(changeWebsiteAction("stackOverflow"));
              dispatch(addWebsiteAction("stackOverflow"));
            }}
          >
            <StackOverflowIcon className={styles.websiteOptionIcon} />
          </div>
          <div
            className={`${styles.websiteOptionIconWrapper} ${
              shownWebsites.twitter ? styles.selectedWebsiteOption : ""
            }`}
            onClick={() => {
              dispatch(changeWebsiteAction("twitter"));
              dispatch(addWebsiteAction("twitter"));
            }}
          >
            <TwitterIcon className={styles.websiteOptionIcon} />
          </div>
          <div className={styles.websiteOptionIconWrapper}>
            <AddIcon className={styles.websiteOptionIcon} />
          </div>
        </div>
      </div>

      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>Exact words</p>
          {/* <MoreIcon className={styles.moreIcon} /> */}
        </div>
        <Form className={styles.importantWords}>
          <input
            type="search"
            name="q_exact"
            id="search_query"
            autoFocus={false}
            defaultValue={exactWords}
            onInput={(e) => {
              dispatch(changeExactWordsAction(e.target.value));
            }}
          />
          <label>Find pages with this exact word or phrase</label>
          <label className="code">e.g Lord of the Rings</label>
        </Form>
      </div>

      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>Date published</p>
        </div>
        <Form
          className={styles.dateOptions}
          onClick={(e) => {
            dispatch(changeDateAction(e.target.value));
          }}
        >
          <div>
            <input
              type="radio"
              id="date_anytime"
              name="dateOption"
              value="anytime"
              defaultChecked={datePublished.anytime}
            />
            <label htmlFor="date_anytime">Any time</label>
          </div>
          <div>
            <input
              type="radio"
              id="date_year"
              name="dateOption"
              value="pastYear"
              defaultChecked={datePublished.pastYear}
            />
            <label htmlFor="date_year">Past year</label>
          </div>
          <div>
            <input
              type="radio"
              name="dateOption"
              id="date_month"
              value="pastMonth"
              defaultChecked={datePublished.pastMonth}
            />
            <label htmlFor="date_month">Past month</label>
          </div>
          <div>
            <input
              type="radio"
              name="dateOption"
              id="date_week"
              value="pastWeek"
              defaultChecked={datePublished.pastWeek}
            />
            <label htmlFor="date_week">Past week</label>
          </div>
        </Form>
      </div>

      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>Similar words</p>
          {/* <MoreIcon className={styles.moreIcon} /> */}
        </div>
        <Form className={styles.importantWords}>
          <input
            type="search"
            name="q_similar"
            id="search_query"
            autoFocus={false}
            defaultValue={similarWords}
            onInput={(e) => {
              dispatch(changeSimilarWordsAction(e.target.value));
            }}
          />
          <label>Find pages with this any of these words</label>
          <label className="code">e.g Sauron, The Dark Lord</label>
        </Form>
      </div>

      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>File format</p>
          {/* <MoreIcon className={styles.moreIcon} /> */}
        </div>
        <Form
          className={styles.fileOptions}
          onClick={(e) => {
            dispatch(changeFileAction(e.target.value));
          }}
        >
          <div>
            <input
              type="radio"
              id="file_anytime"
              name="fileOption"
              value="anyFormat"
              defaultChecked={fileFormat.anyFormat}
            />
            <label htmlFor="file_anytime">Any format</label>
          </div>
          <div>
            <input
              type="radio"
              id="file_pdf"
              name="fileOption"
              value="pdf"
              defaultChecked={fileFormat.pdf}
            />
            <label htmlFor="file_pdf">.pdf</label>
          </div>
          <div>
            <input
              type="radio"
              name="fileOption"
              id="file_zip"
              value="zip"
              defaultChecked={fileFormat.zip}
            />
            <label htmlFor="file_zip">.zip</label>
          </div>
          <div>
            <input
              type="radio"
              name="fileOption"
              id="file_pptx"
              value="pptx"
              defaultChecked={fileFormat.pptx}
            />
            <label htmlFor="file_pptx">.pptx</label>
          </div>
          <div>
            <input
              type="radio"
              name="fileOption"
              id="file_docx"
              value="docx"
              defaultChecked={fileFormat.docx}
            />
            <label htmlFor="file_docx">.docx</label>
          </div>
        </Form>
      </div>

      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>Exclude words</p>
          {/* <MoreIcon className={styles.moreIcon} /> */}
        </div>
        <Form className={styles.importantWords}>
          <input
            type="search"
            name="q_exclude"
            id="search_query"
            autoFocus={false}
            defaultValue={excludeWords}
            onInput={(e) => {
              dispatch(changeExcludeWordsAction(e.target.value));
            }}
          />
          <label>Find pages with none of these words</label>
          <label className="code">e.g Rings of Power</label>
        </Form>
      </div>
    </div>
  );
};
