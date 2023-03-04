import { SearchQueryPage, SearchQueryAdvancedPage } from "../pages";

const searchRoutes = [
  {
    path: "/advanced",
    element: <SearchQueryAdvancedPage />,
    errorElement: <SearchQueryPage />,
  }
];

export default searchRoutes;
