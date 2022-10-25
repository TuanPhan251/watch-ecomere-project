import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Rate, Tooltip, notification } from "antd";

import ProductSpec from "./ProductSpec";

import {
  addProductAction,
  getProductDetailAction,
  getCategoriesListAction,
} from "../../redux/actions";
import { ROUTES } from "../../constants/routes";

import * as S from "./style";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);
  const { id } = useParams();
  const gender = productDetail.data.gender === "male" ? "nam" : "nữ";

  const [itemQuantity, setItemQuantity] = useState(1);

  const handleAddProductToCart = () => {
    dispatch(
      addProductAction({ product: productDetail, productAmount: itemQuantity })
    );

    notification.open({
      message: "Đã thêm sản phẩm vào giỏ hàng",
      placement: "topRight",
      top: 100,
      duration: 2,
      icon: (
        <i
          className="fa-solid fa-check"
          style={{
            color: "#73d13d",
          }}
        ></i>
      ),
    });
  };

  useEffect(() => {
    dispatch(getProductDetailAction({ id: id }));

    dispatch(getCategoriesListAction());
  }, []);

  const renderProductSpec = useMemo(() => {
    return <ProductSpec product={productDetail} />;
  }, [productDetail.data]);

  return (
    <S.Wrapper>
      <S.ProductDetailContainer>
        <Col xxl={8} xl={8} md={24} sm={24} xm={24}>
          <S.ProductImageWrapper>
            <img src={productDetail.data.image} alt="product" />
          </S.ProductImageWrapper>
        </Col>
        <Col xxl={10} xl={10} md={24} sm={24} xm={24}>
          <S.ProductInfoWrapper>
            <S.ProductSummary>
              <h2>{productDetail.data.name}</h2>

              <div className="product_rating">
                <Rate disabled allowHalf defaultValue={4.5} />
                <span className="product_rating-quantity">(12 đánh giá)</span>
              </div>

              <p className="product_summary-brand">
                Thương hiệu: <span>{productDetail.data.category?.name}</span>
              </p>

              <p className="product_summary-gender">
                Loại sản phẩm:{" "}
                <Tooltip title={`Tới trang đồng hồ ${gender}`}>
                  {productDetail.data.gender === "male" ? (
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(ROUTES.USER.MEN_DETAIL, {
                          state: {
                            title: "Nam",
                            gender: "male",
                          },
                        });
                      }}
                    >
                      Đồng hồ nam
                    </Link>
                  ) : (
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(ROUTES.USER.WOMEN_DETAIL, {
                          state: {
                            title: "Nữ",
                            gender: "female",
                          },
                        });
                      }}
                    >
                      Đồng hồ nữ
                    </Link>
                  )}
                </Tooltip>
              </p>

              <p className="product_summary-price">
                GIÁ:
                <span className="product_summary-price-final">
                  {productDetail.data.price?.toLocaleString()}
                  <sup>₫</sup>
                </span>
                <span className="product_summary-price-original">
                  {productDetail.data.price?.toLocaleString()}
                  <sup>₫</sup>
                </span>
              </p>
            </S.ProductSummary>

            <S.ProductActions>
              <div className="product_action-addcart">
                <div className="product_action-addcart-quantity">
                  <span>Số lượng: </span>
                  <button
                    className="quantity_control-btn"
                    onClick={() => {
                      itemQuantity !== 1 && setItemQuantity(itemQuantity - 1);
                    }}
                  >
                    -
                  </button>
                  <input type="text" value={itemQuantity} readOnly min={1} />
                  <button
                    className="quantity_control-btn"
                    onClick={() => setItemQuantity(itemQuantity + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="product_action-addcart-btn"
                  onClick={handleAddProductToCart}
                >
                  THÊM VÀO GIỎ
                </button>
              </div>

              <button
                onClick={() => {
                  handleAddProductToCart();
                  navigate(ROUTES.USER.CHECKOUT);
                }}
              >
                MUA NGAY
              </button>
            </S.ProductActions>
          </S.ProductInfoWrapper>
        </Col>

        <Col xxl={6} xl={6} md={24} sm={24} xm={24}>
          <S.PolicyWrapper>
            <ul className="product_policy-list">
              <li className="product_policy-item">
                <i className="fa-solid fa-truck"></i>
                <span>Miễn phí vận chuyển trên toàn quốc.</span>
              </li>
              <li className="product_policy-item">
                <i className="fa-solid fa-heart-crack"></i>
                <span>Bảo hành chính hãng tại trung tâm ủy quyền.</span>
              </li>
              <li className="product_policy-item">
                <i className="fa-solid fa-arrows-rotate"></i>
                <span>
                  Đổi trả miễn phí trong 30 ngày khi có lỗi nhà sản xuất.
                </span>
              </li>
            </ul>
          </S.PolicyWrapper>
        </Col>
      </S.ProductDetailContainer>

      <S.BottomWrapper>
        <Row>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            {renderProductSpec}
          </Col>

          <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
            <S.ProductContent>
              <h3 className="product_content-heading">Giới thiệu sản phẩm</h3>

              <div
                className="product_content-main"
                dangerouslySetInnerHTML={{
                  __html: productDetail.data.content || "content here",
                }}
              ></div>
            </S.ProductContent>
          </Col>
        </Row>
      </S.BottomWrapper>
    </S.Wrapper>
  );
};

export default ProductDetailPage;
