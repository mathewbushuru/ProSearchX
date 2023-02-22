import { createBrowserRouter } from "react-router-dom";

import appRoutes from "./app-routes";
import searchRoutes from "features/search/routes";

export const appRouter = createBrowserRouter([...appRoutes, ...searchRoutes]);
 