import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./utils/GlobalStyle";

import HomePage from "./pages/Home/";
import ProductDetailPage from "./pages/ProductDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/men/:id" element={<ProductDetailPage />} />
          <Route path="/women/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
