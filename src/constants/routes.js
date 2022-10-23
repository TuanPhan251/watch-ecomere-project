export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",

  USER: {
    HOME: "/",
    BRAND: "/thuong-hieu",
    GENDER_DETAIL: "/san-pham?gender=:type",
    // MEN_DETAIL: "/nam",
    // WOMEN_DETAIL: "/nu",
    MEN_DETAIL: "/san-pham/gioi-tinh",
    WOMEN_DETAIL: "/san-pham/gioi-tinh",
    CONTACT: "/lien-he",
    PRODUCT_DETAIL: "/san-pham/:id",
    CHECKOUT: "/gio-hang",
  },

  ADMIN: {
    DASH_BOARD: "/admin/dashboard",
    USER_LIST_PAGE: "/admin/users",
    ACCOUNT_LIST_PAGE: "/admin/accounts",
    ACCOUNT_DETAIL_PAGE: "/admin/accounts/:id",
    PRODUCT_LIST_PAGE: "/admin/products",
    CATEGORY_LIST_PAGE: "/admin/categories",
    CREATE_PRODUCT_PAGE: "/admin/products/create",
    UPDATE_PRODUCT_PAGE: "/admin/products/update/:id",
  },
};
