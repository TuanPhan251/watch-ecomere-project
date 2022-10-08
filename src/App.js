import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./utils/GlobalStyle";

import { ROUTES } from "./constants/routes";

import AdminLayout from "./components/Layouts/AdminLayout";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AdminDashboardPage from "./pages/admin/AdminHomePage";
import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminUsersPage from "./pages/admin/AdminUserPage";

import UserLayout from "./components/Layouts/UserLayout";
import HomePage from "./pages/Home/";
import ProductPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetail";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import BrandPage from "./pages/BrandPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route element={<UserLayout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route
              path={ROUTES.MEN_DETAIL}
              element={<ProductPage gender="male" />}
            />
            <Route
              path={ROUTES.WOMEN_DETAIL}
              element={<ProductPage gender="female" />}
            />
            <Route
              path={ROUTES.PRODUCT_DETAIL}
              element={<ProductDetailPage />}
            />
            <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            <Route path={ROUTES.BRAND} element={<BrandPage />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path={ROUTES.ADMIN.HOME_PAGE} element={<AdminHomePage />} />
            <Route
              path={ROUTES.ADMIN.DASH_BOARD}
              element={<AdminDashboardPage />}
            />
            <Route
              path={ROUTES.ADMIN.PRODUCT_LIST_PAGE}
              element={<AdminProductPage />}
            />
            <Route
              path={ROUTES.ADMIN.USER_LIST_PAGE}
              element={<AdminUsersPage />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
