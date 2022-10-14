import { ROUTES } from "../../../constants/routes";

export const SidebarContent = [
  {
    title: "Dashboard",
    path: ROUTES.ADMIN.DASH_BOARD,
    icon: <i className="fa-solid fa-table-columns"></i>,
  },
  {
    title: "Users",
    path: ROUTES.ADMIN.USER_LIST_PAGE,
    icon: <i className="fa-solid fa-users"></i>,
  },
  {
    title: "Products",
    path: ROUTES.ADMIN.PRODUCT_LIST_PAGE,
    icon: <i className="fa-solid fa-boxes-stacked"></i>,
  },
  {
    title: "Main Page",
    path: "/",
    icon: <i class="fa-solid fa-house"></i>,
  },
];
