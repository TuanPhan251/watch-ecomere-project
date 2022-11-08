export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",

  USER: {
    HOME: "/",
    BRAND: "/thuong-hieu",
    MEN_DETAIL: "/san-pham/gioi-tinh",
    WOMEN_DETAIL: "/san-pham/gioi-tinh",
    CONTACT: "/lien-he",
    PRODUCT_DETAIL: "/san-pham/:id",
    CART_SUMMARY: "/gio-hang",
    USER_INFO: "/thong-tin",
    USER_INFO_ORDER: "/thong-tin/don-hang",
    USER_INFO_WISHLIST: "/thong-tin/yeu-thich",
    USER_INFO_PASSWORD: "/thong-tin/mat-khau",
  },

  ADMIN: {
    DASH_BOARD: "/admin/dashboard",
    USER_LIST_PAGE: "/admin/users",
    ORDER_LIST_PAGE: "/admin/orders",
    ORDER_DETAIL_PAGE: "/admin/orders/:id",
    ACCOUNT_LIST_PAGE: "/admin/accounts",
    ACCOUNT_DETAIL_PAGE: "/admin/accounts/:id",
    PRODUCT_LIST_PAGE: "/admin/products",
    CATEGORY_LIST_PAGE: "/admin/categories",
    CATEGORY_DETAIL_PAGE: "/admin/categories/:id",
    CREATE_PRODUCT_PAGE: "/admin/products/create",
    UPDATE_PRODUCT_PAGE: "/admin/products/update/:id",
  },
};
