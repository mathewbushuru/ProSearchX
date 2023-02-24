import { Link } from "react-router-dom";
import { MdOutlineMoreVert as MoreIcon } from "react-icons/md";
import { TbTrendingUp as TrendingIcon } from "react-icons/tb";

import styles from "./MobileTrendingSearches.module.css";

const DUMMY_TRENDING_SEARCH_ITEMS = [
  { title: "SpaceX starship launch", desc: null },
  { title: "david geffen", desc: "American business magnate" },
  { title: "Apple iphone 15 pro max", desc: null },
  { title: "hyundai ioniq 6", desc: null },
  {
    title: "russian president vladimir putin",
    desc: "Vladimir Putin - President of Russia",
  },
  { title: "snow storm ontario", desc: null },
  { title: "goodyear blimp", desc: null },
];

export const MobileTrendingSearches = () => {
  return (
    <div className={styles.mobileTrendingSearches}>
      <div className={styles.header}>
        <p>Trending searches</p>
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
