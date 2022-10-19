import { ROUTES } from "../../../constants/routes";

export const SidebarContent = [
  {
    title: "Bản điều khiển",
    path: ROUTES.ADMIN.DASH_BOARD,
    icon: <i className="fa-solid fa-table-columns"></i>,
  },
  {
    title: "Người dùng",
    path: ROUTES.ADMIN.USER_LIST_PAGE,
    icon: <i className="fa-solid fa-users"></i>,
  },
  {
    title: "Tài khoản",
    path: ROUTES.ADMIN.ACCOUNT_LIST_PAGE,
    icon: <i className="fa-solid fa-clipboard"></i>,
  },
  {
    title: "Sản phẩm",
    path: ROUTES.ADMIN.PRODUCT_LIST_PAGE,
    icon: <i className="fa-solid fa-boxes-stacked"></i>,
  },
  {
    title: "Danh mục",
    path: ROUTES.ADMIN.CATEGORY_LIST_PAGE,
    icon: <i className="fa-solid fa-list"></i>,
  },
  {
    title: "Trang chủ",
    path: "/",
    icon: <i className="fa-solid fa-house"></i>,
  },
];
