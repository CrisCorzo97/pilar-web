import { PAGES_ROUTES } from "./routes.constants";

export const drawerMenu = [
  {
    title: "inicio",
    path: "/",
  },
  {
    title: "pages",
    children: [
      {
        title: "todo",
        path: `/${PAGES_ROUTES.TODO}`,
      },
      {
        title: "fetchList",
        path: `/${PAGES_ROUTES.FETCH_LIST}`,
      },
    ],
  },
];

export const popMenu = [
  {
    title: "inicio",
    path: "/",
  },
];
