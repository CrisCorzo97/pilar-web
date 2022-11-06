import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./layouts/NotFound";
import Todo from "./todo/Todo";
import FetchList from "./fetchlist/FetchList";
import TaskForm from "./taskForm/TaskForm";
import { PAGES_ROUTES } from "../constants/routes.constants";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: PAGES_ROUTES.TODO, element: <Todo /> },
        { path: PAGES_ROUTES.CREATE_TASK, element: <TaskForm /> },
        { path: `${PAGES_ROUTES.EDIT_TASK}/:id`, element: <TaskForm /> },
        { path: PAGES_ROUTES.FETCH_LIST, element: <FetchList /> },
      ],
    },
    { path: "/404", element: <NotFound /> },
    { path: "/*", element: <Navigate to="/404" replace /> },
  ]);
};
export default Routes;
