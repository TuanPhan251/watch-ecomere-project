import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./utils/GlobalStyle";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";

import HomePage from "./pages/Home/";
import ProductDetailPage from "./pages/ProductDetail";
import ContactPage from "./pages/ContactPage";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="App">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.MEN_DETAIL} element={<ProductDetailPage />} />
          <Route path={ROUTES.WOMEN_DETAIL} element={<ProductDetailPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
