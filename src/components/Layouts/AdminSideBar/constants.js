import { ROUTES } from "../../../constants/routes";

export const SidebarContent = [
  {
    title: "Bảng điều khiển",
    path: ROUTES.ADMIN.DASH_BOARD,
    icon: <i className="fa-solid fa-table-columns"></i>,
  },
  {
    title: "Đơn hàng",
    path: ROUTES.ADMIN.ORDER_LIST_PAGE,
    icon: <i className="fa-solid fa-clipboard-list"></i>,
  },
  {
    title: "Người dùng",
    path: ROUTES.ADMIN.USER_LIST_PAGE,
    icon: <i className="fa-solid fa-users"></i>,
  },
  {
    title: "Tài khoản",
    path: ROUTES.ADMIN.ACCOUNT_LIST_PAGE,
    icon: <i className="fa-solid fa-address-book"></i>,
  },
  {
    title: "Sản phẩm",
    path: ROUTES.ADMIN.PRODUCT_LIST_PAGE,
    icon: <i className="fa-solid fa-boxes-stacked"></i>,
  },
  {
    title: "Nhãn hàng",
    path: ROUTES.ADMIN.CATEGORY_LIST_PAGE,
    icon: <i className="fa-solid fa-list"></i>,
  },
  {
    title: "Mã giảm giá",
    path: ROUTES.ADMIN.VOUCHER_LIST_PAGE,
    icon: <i className="fa-solid fa-ticket-simple"></i>,
  },
  {
    title: "Bài viết",
    path: ROUTES.ADMIN.BLOG_LIST_PAGE,
    icon: <i className="fa-regular fa-rectangle-list"></i>,
  },
];
