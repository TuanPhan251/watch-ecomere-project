import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ROUTES } from "../../../constants/routes";

import HomeProductList from "./ProductSections/HomeProductList";

import headerVideo from "../../../assets/banner/Cinematic Watch Broll.webm";

import menImg from "../../../assets/banner/men-1.webp";
import womenImg from "../../../assets/banner/women-1.webp";

import * as S from "./style";

const HomePage = () => {
  const navigate = useNavigate();

  const productRef = useRef();

  const scrollToProduct = () => {
    window.scrollTo({
      top: productRef.current.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <S.HomePageWrapper>
      <div className="header_img-wrapper">
        <video src={headerVideo} muted loop autoPlay />

        <h2 className="header_img-header">
          Bạn có thể trì hoãn, nhưng thời gian thì không.
        </h2>
        <h3 className="header_img-slogan">
          Hãy kiểm soát thời gian trên đôi tay của bạn.
        </h3>
        <button className="header-img-action" onClick={scrollToProduct}>
          Khám phá
        </button>

        <div className="overlay"></div>
      </div>

      <section className="men_products-section" ref={productRef}>
        <div className="men_products-banner-img">
          <img alt="" src={menImg} />
          <h3 className="product_banner-title">ĐỒNG HỒ NAM</h3>
          <Link
            className="product_banner-btn"
            onClick={(e) => {
              e.preventDefault();
              navigate({
                pathname: ROUTES.USER.MEN_DETAIL,
                search: "?gender=male",
              });
            }}
          >
            KHÁM PHÁ THÊM
          </Link>
        </div>

        <div className="men_products-list">
          <HomeProductList gender="male" />
        </div>
      </section>

      <section className="women_products-section">
        <div className="women_products-banner-img">
          <img alt="" src={womenImg} />
          <h3 className="product_banner-title">ĐỒNG HỒ NỮ</h3>
          <Link
            className="product_banner-btn"
            onClick={(e) => {
              e.preventDefault();
              navigate({
                pathname: ROUTES.USER.MEN_DETAIL,
                search: "?gender=male",
              });
            }}
          >
            KHÁM PHÁ THÊM
          </Link>
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
