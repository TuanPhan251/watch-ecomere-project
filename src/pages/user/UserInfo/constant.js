import { ROUTES } from "../../../constants/routes";

export const userPageSidebar = [
  {
    title: "Thông tin tài khoản",
    path: ROUTES.USER.USER_INFO,
    icon: <i className="fa-regular fa-user"></i>,
  },
  {
    title: "Lịch sử mua hàng",
    path: ROUTES.USER.USER_INFO_ORDER,
    icon: <i className="fa-solid fa-clock-rotate-left"></i>,
  },
  {
    title: "Sản phẩm yêu thích",
    path: ROUTES.USER.USER_INFO_WISHLIST,
    icon: <i className="fa-regular fa-heart"></i>,
  },
  {
    title: "Đổi mật khẩu",
    path: ROUTES.USER.USER_INFO_PASSWORD,
    icon: <i className="fa-solid fa-key"></i>,
  },
];
