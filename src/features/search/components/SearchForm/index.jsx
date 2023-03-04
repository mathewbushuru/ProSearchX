import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CgSearch as SearchIcon } from "react-icons/cg";
import { BiMicrophone as MicrophoneIcon } from "react-icons/bi";
import { BsCamera as CameraIcon } from "react-icons/bs";
import { RxDividerVertical as DividerIcon } from "react-icons/rx";

import { useQuery } from "features/search/hooks";

import { modifyQueryAction } from "features/search/stores/querySlice";

import styles from "./SearchForm.module.css";

export const SearchForm = ({ className = "", desktopMode = false }) => {
  const dispatch = useDispatch();
  const queryString = useSelector((state) => state.query.queryString);

  const [submitQuery] = useQuery();

  return (
    <Form
      className={`${styles.searchForm} ${className}`}
      onSubmit={submitQuery}
    >
      <input
        type="search"
        name="q"
        id="search_query"
        value={queryString}
        onInput={(e) => {
          dispatch(modifyQueryAction(e.target.value));
        }}
        className={
          desktopMode
            ? `${styles.desktopSearchInput}`
            : `${styles.mobileSearchInput}`
        }
      />
      <SearchIcon
        className={
          desktopMode
            ? `${styles.searchIconDesktop}`
            : `${styles.searchIconMobile}`
        }
        onClick={submitQuery}
      />
      <CameraIcon
        className={
          desktopMode
            ? `${styles.cameraIconDesktop}`
            : `${styles.cameraIconMobile}`
        }
      />
      <MicrophoneIcon
        className={
          desktopMode
            ? `${styles.microphoneIconDesktop}`
            : `${styles.microphoneIconMobile}`
        }
      />
      <DividerIcon
        className={
          desktopMode
            ? `${styles.dividerIconDesktop}`
            : `${styles.dividerIconMobile}`
        }
      />
    </Form>
  );
};
