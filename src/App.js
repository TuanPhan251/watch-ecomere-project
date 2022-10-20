import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { getUserInfoAction } from "../src/redux/actions";

import GlobalStyle from "./utils/GlobalStyle";
import { ROUTES } from "./constants/routes";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import LoginLayout from "./components/Layouts/LoginLayout";
import AdminLayout from "./components/Layouts/AdminLayout";
import UserLayout from "./components/Layouts/UserLayout";

import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminAccountsPage from "./pages/admin/AdminAcountsPage";
import AccountDetailsPage from "./pages/admin/AdminAcountsPage/AccountDetailsPage";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminUsersPage from "./pages/admin/AdminUserPage";
import CreateProductPage from "./pages/admin/AdminProductPage/CreateProductPage";
import UpdateProductPage from "./pages/admin/AdminProductPage/UpdateProductPage";

import HomePage from "./pages/Home/";
import ProductPage from "./pages/user/ProductsPage";
import ProductDetailPage from "./pages/ProductDetail";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import BrandPage from "./pages/BrandPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const decodeInfo = jwtDecode(accessToken);
      dispatch(getUserInfoAction({ id: decodeInfo.sub }));
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route element={<UserLayout />}>
            <Route path={ROUTES.USER.HOME} element={<HomePage />} />
            <Route
              path={ROUTES.USER.MEN_DETAIL}
              element={<ProductPage gender="male" />}
            />
            <Route
              path={ROUTES.USER.WOMEN_DETAIL}
              element={<ProductPage gender="female" />}
            />
            <Route
              path={ROUTES.USER.PRODUCT_DETAIL}
              element={<ProductDetailPage />}
            />
            <Route path={ROUTES.USER.CHECKOUT} element={<CheckoutPage />} />
            <Route path={ROUTES.USER.CONTACT} element={<ContactPage />} />
            <Route path={ROUTES.USER.BRAND} element={<BrandPage />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route
              path={ROUTES.ADMIN.DASH_BOARD}
              element={<AdminDashboardPage />}
            />
            <Route
              path={ROUTES.ADMIN.PRODUCT_LIST_PAGE}
              element={<AdminProductPage />}
            />
            <Route
              path={ROUTES.ADMIN.ACCOUNT_LIST_PAGE}
              element={<AdminAccountsPage />}
            />
            <Route
              path={ROUTES.ADMIN.ACCOUNT_DETAIL_PAGE}
              element={<AccountDetailsPage />}
            />
            <Route
              path={ROUTES.ADMIN.CATEGORY_LIST_PAGE}
              element={<AdminCategoriesPage />}
            />
            <Route
              path={ROUTES.ADMIN.CREATE_PRODUCT_PAGE}
              element={<CreateProductPage />}
            />
            <Route
              path={ROUTES.ADMIN.UPDATE_PRODUCT_PAGE}
              element={<UpdateProductPage />}
            />
            <Route
              path={ROUTES.ADMIN.USER_LIST_PAGE}
              element={<AdminUsersPage />}
            />
          </Route>
          <Route element={<LoginLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
