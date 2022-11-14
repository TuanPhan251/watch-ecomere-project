import { useRef, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, generatePath } from "react-router-dom";
import Slider from "react-slick";

import { ROUTES } from "../../../constants/routes";
import { getNewProductsList } from "../../../redux/actions";

import HomeProductList from "./ProductSections/HomeProductList";

import headerVideo from "../../../assets/banner/Cinematic Watch Broll.webm";

import menImg from "../../../assets/banner/men-1.webp";
import womenImg from "../../../assets/banner/women-1.webp";
import bgrImage from "../../../assets/banner/bgr-img.jpg";

import * as S from "./style";
import { Col, Spin } from "antd";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  autoplay: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const HomePage = () => {
  window.title = "asdf";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { newProductsList } = useSelector((state) => state.product);

  const newProducts = [...newProductsList.data];

  const shuffled = newProducts.sort(() => 0.5 - Math.random());
  const selectedNewProducts = shuffled.slice(0, 8);
  const videoRef = useRef();

  window.scrollTo({
    top: 0,
  });

  useEffect(() => {
    dispatch(
      getNewProductsList({
        params: {
          isNew: true,
        },
      })
    );
  }, []);

  const scrollToProduct = () => {
    window.scrollTo({
      top: videoRef.current.clientHeight,
      behavior: "smooth",
    });
  };

  const renderNewProducts = useMemo(() => {
    return selectedNewProducts?.map((item) => {
      return (
        <Col xxl={24} xl={24} md={24} sm={24} xs={24} key={item.id}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: `${item.slug}.${item.id}`,
            })}
          >
            <S.Product>
              <div className="newProduct__image">
                <img src={item.image} alt="product" />
              </div>
              <h2>{item.name}</h2>

              <div className="new_product-label">
                <span>Mới</span>
              </div>
            </S.Product>
          </Link>
        </Col>
      );
    });
  }, [newProductsList.data]);

  if (newProductsList.loading)
    return (
      <Spin spinning={true}>
        <div
          style={{
            minHeight: "100vh",
          }}
        ></div>
      </Spin>
    );

  return (
    <S.HomePageWrapper>
      <div className="header_img-wrapper" ref={videoRef}>
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

      <section className="new_products-section">
        <h3 className="new_products_section-heading">Sản phẩm mới</h3>
        <Slider
          {...settings}
          prevArrow={<SamplePrevArrow />}
          nextArrow={<SampleNextArrow />}
        >
          {renderNewProducts}
        </Slider>

        <div className="new_products-list"></div>
      </section>

      <section className="men_products-section">
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

      <S.EmailRegister bgrImage={bgrImage}>
        <div className="email_register-inner">
          <div className="email_register-content">
            <h3>Đăng ký</h3>
            <p>
              Đăng ký nhận bản tin để cập nhật những sản phẩm mới, nhận thông
              tin ưu đãi đặc biệt và thông tin giảm giá khác.
            </p>
            <form className="email_register-form">
              <input placeholder="Nhập email muốn đăng ký..." />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </S.EmailRegister>

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
                search: "?gender=female",
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
