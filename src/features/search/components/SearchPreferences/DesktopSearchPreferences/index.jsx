import { Link, Form } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { MdOutlineMoreVert as MoreIcon } from "react-icons/md";
import { FaGlobeAmericas as GlobalIcon } from "react-icons/fa";
import { FaRedditAlien as RedditIcon } from "react-icons/fa";
import { FaStackOverflow as StackOverflowIcon } from "react-icons/fa";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { IoAddOutline as AddIcon } from "react-icons/io5";

import { useQuery } from "features/search/hooks";

import {
  changeWebsiteAction,
  changeDateAction,
  changeFileAction,
  changeExactWordsAction,
  changeSimilarWordsAction,
  changeExcludeWordsAction,
} from "features/search/stores/uiSlice";

import styles from "./DesktopSearchPreferences.module.css";

export const DesktopSearchPreferences = () => {
  const dispatch = useDispatch();

  const shownWebsites = useSelector((state) => state.ui.shownWebsites);
  const datePublished = useSelector((state) => state.ui.datePublished);
  const fileFormat = useSelector((state) => state.ui.fileFormat);
  const exactWords = useSelector((state) => state.ui.exactWords);
  const similarWords = useSelector((state) => state.ui.similarWords);
  const excludeWords = useSelector((state) => state.ui.excludeWords);

  const [submitQuery] = useQuery();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submitQuery();
    }
  };

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
            // onDoubleClick={submitQuery}
          >
            <GlobalIcon className={styles.websiteOptionIcon} />
          </div>
          <div
            className={`${styles.websiteOptionIconWrapper} ${
              shownWebsites.reddit ? styles.selectedWebsiteOption : ""
            }`}
            onClick={() => {
              dispatch(changeWebsiteAction("reddit"));
            }}
            // onDoubleClick={submitQuery}
          >
            <RedditIcon className={styles.websiteOptionIcon} />
          </div>
          <div
            className={`${styles.websiteOptionIconWrapper} ${
              shownWebsites.stackOverflow ? styles.selectedWebsiteOption : ""
            }`}
            onClick={() => {
              dispatch(changeWebsiteAction("stackOverflow"));
            }}
            // onDoubleClick={submitQuery}
          >
            <StackOverflowIcon className={styles.websiteOptionIcon} />
          </div>
          <div
            className={`${styles.websiteOptionIconWrapper} ${
              shownWebsites.twitter ? styles.selectedWebsiteOption : ""
            }`}
            onClick={() => {
              dispatch(changeWebsiteAction("twitter"));
            }}
            // onDoubleClick={submitQuery}
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
        </div>
        <Form className={styles.importantWords} onSubmit={submitQuery}>
          <input
            type="search"
            name="q_exact"
            id="search_query"
            autoFocus={false}
            value={exactWords}
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
          onKeyDown={(e) => handleKeyPress(e)}
          onSubmit={submitQuery}
        >
          <div>
            <input
              type="radio"
              id="date_anytime"
              name="dateOption"
              value="anytime"
              checked={datePublished.anytime}
              onChange={(e) => {
                dispatch(changeDateAction(e.target.value));
              }}
            />
            <label htmlFor="date_anytime">Any time</label>
          </div>
          <div>
            <input
              type="radio"
              id="date_year"
              name="dateOption"
              value="pastYear"
              checked={datePublished.pastYear}
              onChange={(e) => {
                dispatch(changeDateAction(e.target.value));
              }}
            />
            <label htmlFor="date_year">Past year</label>
          </div>
          <div>
            <input
              type="radio"
              name="dateOption"
              id="date_month"
              value="pastMonth"
              checked={datePublished.pastMonth}
              onChange={(e) => {
                dispatch(changeDateAction(e.target.value));
              }}
            />
            <label htmlFor="date_month">Past month</label>
          </div>
          <div>
            <input
              type="radio"
              name="dateOption"
              id="date_week"
              value="pastWeek"
              checked={datePublished.pastWeek}
              onChange={(e) => {
                dispatch(changeDateAction(e.target.value));
              }}
            />
            <label htmlFor="date_week">Past week</label>
          </div>
        </Form>
      </div>

      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>Similar words</p>
        </div>
        <Form className={styles.importantWords} onSubmit={submitQuery}>
          <input
            type="search"
            name="q_similar"
            id="search_query"
            autoFocus={false}
            value={similarWords}
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
          onKeyDown={(e) => handleKeyPress(e)}
          onSubmit={submitQuery}
        >
          <div>
            <input
              type="radio"
              id="file_anytime"
              name="fileOption"
              value="anyFormat"
              checked={fileFormat.anyFormat}
              onChange={(e) => {
                dispatch(changeFileAction(e.target.value));
              }}
            />
            <label htmlFor="file_anytime">Any format</label>
          </div>
          <div>
            <input
              type="radio"
              id="file_pdf"
              name="fileOption"
              value="pdf"
              checked={fileFormat.pdf}
              onChange={(e) => {
                dispatch(changeFileAction(e.target.value));
              }}
            />
            <label htmlFor="file_pdf">.pdf</label>
          </div>
          <div>
            <input
              type="radio"
              name="fileOption"
              id="file_pptx"
              value="pptx"
              checked={fileFormat.pptx}
              onChange={(e) => {
                dispatch(changeFileAction(e.target.value));
              }}
            />
            <label htmlFor="file_pptx">.pptx</label>
          </div>
          <div>
            <input
              type="radio"
              name="fileOption"
              id="file_zip"
              value="zip"
              checked={fileFormat.zip}
              onChange={(e) => {
                dispatch(changeFileAction(e.target.value));
              }}
            />
            <label htmlFor="file_zip">.zip</label>
          </div>
          <div>
            <input
              type="radio"
              name="fileOption"
              id="file_docx"
              value="docx"
              checked={fileFormat.docx}
              onChange={(e) => {
                dispatch(changeFileAction(e.target.value));
              }}
            />
            <label htmlFor="file_docx">.docx</label>
          </div>
        </Form>
      </div>

      <div className={styles.searchPreferencesSection}>
        <div className={styles.header}>
          <p>Exclude words</p>
        </div>
        <Form className={styles.importantWords} onSubmit={submitQuery}>
          <input
            type="search"
            name="q_exclude"
            id="search_query"
            autoFocus={false}
            value={excludeWords}
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
