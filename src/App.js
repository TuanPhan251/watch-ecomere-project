import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./utils/GlobalStyle";

import { ROUTES } from "./constants/routes";
import HomePage from "./pages/Home/";
import ProductPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetail";
import ContactPage from "./pages/ContactPage";
import BrandPage from "./pages/BrandPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route
            path={ROUTES.MEN_DETAIL}
            element={<ProductPage gender="male" />}
          />
          <Route
            path={ROUTES.WOMEN_DETAIL}
            element={<ProductPage gender="female" />}
          />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetailPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES.BRAND} element={<BrandPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
