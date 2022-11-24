import { useRef, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, generatePath } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { ROUTES } from "../../../constants/routes";
import {
  getProductListUserAction,
  removeProductDetailAction,
} from "../../../redux/actions";

import HomeProductList from "./ProductSections/HomeProductList";

import headerVideo from "../../../assets/banner/Cinematic Watch Broll.webm";

import menImg from "../../../assets/banner/men-1.webp";
import womenImg from "../../../assets/banner/women-1.webp";
import bgrImage from "../../../assets/banner/bgr-img.jpg";

import * as S from "./style";
import { Col, Input, Row, Spin } from "antd";

const HomePage = () => {
  window.title = "asdf";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productListUser } = useSelector((state) => state.product);

  const newProducts = productListUser.data?.filter(
    (item) => item.isNew === true
  );

  const shuffled = newProducts.sort(() => 0.5 - Math.random());
  const selectedNewProducts = shuffled.slice(0, 8);
  const videoRef = useRef();

  window.scrollTo({
    top: 0,
  });

  useEffect(() => {
    dispatch(
      getProductListUserAction({
        params: {
          page: 1,
          limit: 999,
        },
      })
    );

    document.title = "Gaida | Trang chủ";

    return () => {
      dispatch(removeProductDetailAction());
    };
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
        <SwiperSlide key={item.id}>
          <Col xxl={24} xl={24} md={24} sm={24} xs={24}>
            <Link
              to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                id: `${item.slug}.${item.id}`,
              })}
            >
              <S.Product>
                <div className="newProduct__image">
                  <img src={item.images[0].url} alt="product" />
                </div>
                <h2>{item.name}</h2>

                <div className="new_product-label">
                  <span>Mới</span>
                </div>
              </S.Product>
            </Link>
          </Col>
        </SwiperSlide>
      );
    });
  }, [productListUser.data]);

  if (productListUser.loading)
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
      <div className="top__spacer"></div>
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

      <section className="policy__section">
        <Row>
          <Col span={8}>
            <div className="policy__section-img">
              <img
                alt=""
                src="https://theme.hstatic.net/1000270050/1000900842/14/services_item_1_img.png?v=32"
              />
            </div>

            <div className="policy__section-content">
              <h4>Sản phẩm chính hãng</h4>
              <p>Chất lượng thật giá trị thật</p>
            </div>
          </Col>
          <Col span={8}>
            <div className="policy__section-img">
              <img
                alt=""
                src="https://theme.hstatic.net/1000270050/1000900842/14/services_item_2_img.png?v=32"
              />
            </div>
            <div className="policy__section-content">
              <h4>Bảo hành 12 tháng</h4>
              <p>1 đổi 1 khi sản phẩm lỗi do nhà sản xuất</p>
            </div>
          </Col>
          <Col span={8}>
            <div className="policy__section-img">
              <img
                alt=""
                src="https://theme.hstatic.net/1000270050/1000900842/14/services_item_3_img.png?v=32"
              />
            </div>
            <div className="policy__section-content">
              <h4>Giao hàng nhanh chóng</h4>
              <p>Sản phẩm được đóng gói cẩn thận</p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="new_products-section">
        <h3 className="new_products_section-heading">Sản phẩm mới</h3>

        {/* <Slider ref={sliderRef} {...settings}>
          {renderNewProducts}
        </Slider> */}

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          pagination={{ clickable: true }}
          navigation
          autoplay={true}
          loop={true}
          breakpoints={{
            1: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {renderNewProducts}
        </Swiper>

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
            <h3>Đăng ký nhận bản tin</h3>
            <p>
              Để cập nhật những sản phẩm mới, nhận thông tin ưu đãi đặc biệt và
              thông tin giảm giá khác.
            </p>
            <form className="email_register-form">
              <Input placeholder="Nhập email muốn đăng ký..." />
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

      <section className="instagram__follow-section">
        <div className="follow__section-title">
          <h3>Theo dõi chúng tôi trên Instagram</h3>
        </div>

        <div className="follow__section-name">
          <p>@aida.instagram</p>
        </div>

        <div className="follow__section-image-list">
          <Col xxl={4} lg={4} md={8} sm={12} xs={12}>
            <div className="follow__section-image">
              <img
                alt=""
                src="https://theme.hstatic.net/1000270050/1000900842/14/gallery_item_1_img.jpg?v=32"
              />
            </div>
          </Col>
          <Col xxl={4} lg={4} md={8} sm={12} xs={12}>
            <div className="follow__section-image">
              <img
                alt=""
                src="https://theme.hstatic.net/1000270050/1000900842/14/gallery_item_2_img.jpg?v=32"
              />
            </div>
          </Col>

          <Col xxl={4} lg={4} md={8} sm={12} xs={12}>
            <div className="follow__section-image">
              <img
                alt=""
                src="https://theme.hstatic.net/1000270050/1000900842/14/gallery_item_3_img.jpg?v=32"
              />
            </div>
          </Col>

          <Col xxl={4} lg={4} md={8} sm={12} xs={12}>
            <div className="follow__section-image">
              <img
                alt=""
                src="https://theme.hstatic.net/1000270050/1000900842/14/gallery_item_4_img.jpg?v=32"
              />
            </div>
          </Col>

          <Col xxl={4} lg={4} md={8} sm={12} xs={12}>
            <div className="follow__section-image">
              <img
                alt=""
                src="https://theme.hstatic.net/1000270050/1000900842/14/gallery_item_5_img.jpg?v=32"
              />
            </div>
          </Col>

          <Col xxl={4} lg={4} md={8} sm={12} xs={12}>
            <div className="follow__section-image">
              <img
                alt=""
                src="https://theme.hstatic.net/1000270050/1000900842/14/gallery_item_6_img.jpg?v=32"
              />
            </div>
          </Col>
        </div>
      </section>
    </S.HomePageWrapper>
  );
};

export default HomePage;
