import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import HomeProductList from "./ProductSections/HomeProductList";

import headerImg from "../../assets/banner/header.jpg";
import menImg from "../../assets/banner/men-1.webp";
import womenImg from "../../assets/banner/women-1.webp";

import * as S from "./style";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <S.HomePageWrapper>
      <div className="header_img-wrapper">
        <img alt="" src={headerImg} />
      </div>

      <section className="men_products-section">
        <div className="men_products-banner-img">
          <img alt="" src={menImg} />
          <h3 className="product_banner-title">ĐỒNG HỒ NAM</h3>
          <button
            className="product_banner-btn"
            onClick={() => navigate(ROUTES.MEN_DETAIL)}
          >
            KHÁM PHÁ THÊM
          </button>
        </div>

        <div className="men_products-list">
          <HomeProductList gender="male" />
        </div>
      </section>

      <section className="women_products-section">
        <div className="women_products-banner-img">
          <img alt="" src={womenImg} />
          <h3 className="product_banner-title">ĐỒNG HỒ NỮ</h3>
          <button
            className="product_banner-btn"
            onClick={() => navigate(ROUTES.WOMEN_DETAIL)}
          >
            KHÁM PHÁ THÊM
          </button>
        </div>

        <div className="women_products-list">
          {" "}
          <HomeProductList gender="female" />
        </div>
      </section>
    </S.HomePageWrapper>
  );
};

export default HomePage;
