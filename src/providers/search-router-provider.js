import { RouterProvider } from "react-router-dom";

import searchRouter from "features/search/routes/search-router";

export default function SearchRouterProvider() {
  return <RouterProvider router={searchRouter} />;
}
