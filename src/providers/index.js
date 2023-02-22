import { RouterProvider } from "react-router-dom";

import { appRouter } from "routes";

export default function AppProvider() {
  return <RouterProvider router={appRouter} />;
}

export const ProtectedProvider = () => {
  return <p>You should not see this until you log in</p>;
};
