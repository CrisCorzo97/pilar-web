import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./layouts/NotFound";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [{ path: "", element: <Dashboard /> }],
    },
    { path: "/404", element: <NotFound /> },
    { path: "/*", element: <Navigate to="/404" replace /> },
  ]);
};
export default Routes;
