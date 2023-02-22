import { createBrowserRouter } from "react-router-dom";

import { SearchQueryPage } from "features/search/pages/search-query";
import { ComingSoon } from "components/UtilComponents";

const searchRouter = createBrowserRouter([
  {
    path: "/",
    element: <SearchQueryPage />,
    errorElement: <SearchQueryPage />,
  },
  {
    path: "/about",
    element: <ComingSoon item="About page" />,
  },
  {
    path: "/auth",
    element: <ComingSoon item="Authentication" />,
  },
  {
    path: "/doodles",
    element: <ComingSoon item="Doodles" />,
  },
  {
    path: "/gmail",
    element: <ComingSoon item="Gmail" />,
  },
  {
    path: "/images",
    element: <ComingSoon item="Google Images" />,
  },
  {
    path: "/search",
    element: <ComingSoon item="Search results" />,
  },
  {
    path: "/store",
    element: <ComingSoon item="Store page" />,
  },
]);

export default searchRouter;
