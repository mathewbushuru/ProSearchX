import { SearchResultsPage,SearchQueryPage, SearchQueryAdvancedPage } from "../pages";

const searchRoutes = [
  {
    path: "/advanced",
    element: <SearchQueryAdvancedPage />,
    errorElement: <SearchQueryPage />,
  },
  {
    path: "/search",
    element: <SearchResultsPage />,
    errorElement: <SearchQueryPage />,
  },
];

export default searchRoutes;
