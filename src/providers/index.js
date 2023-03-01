import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { appRouter } from "routes";
import globalStore from "stores/redux/globalStore";

export default function AppProvider() {
  return (
    <ReduxProvider store={globalStore}>
      <RouterProvider router={appRouter} />
    </ReduxProvider>
  );
}
