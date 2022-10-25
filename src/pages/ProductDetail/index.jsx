import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Rate, Tooltip, notification } from "antd";

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

  return (
    <main style={{ minHeight: "100vh" }}>
      <Row gutter={4}>
        <S.ProductDetailContainer>
          <Col span={10}>
            <S.ProductImageWrapper>
              <img src={productDetail.data.image} alt="product" />
            </S.ProductImageWrapper>
          </Col>
          <Col span={14}>
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

              <S.ProductActions>
                <button
                  onClick={() => {
                    handleAddProductToCart();
                    navigate(ROUTES.USER.CHECKOUT);
                  }}
                >
                  MUA NGAY
                </button>

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
              </S.ProductActions>
            </S.ProductInfoWrapper>
          </Col>
        </S.ProductDetailContainer>
      </Row>

      <Row>
        <S.ProductSpecContainer>
          <S.ProductSpecHeading>
            Chi tiết thông số sản phẩm
          </S.ProductSpecHeading>

          <Col span={12}>
            <S.ProductSpecCol>
              <S.ProductSpecItem>
                <span>Giới tính:</span>
                <span>
                  {productDetail.data.gender === "male" ? "Nam" : "Nữ"}
                </span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Kiểu máy:</span>
                <span>{productDetail.data.movement}</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Chất liệu kính:</span>
                <span>{productDetail.data.glassMaterial}</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Chất liệu vỏ:</span>
                <span>{productDetail.data.caseMaterial}</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Chất liệu dây:</span>
                <span>{productDetail.data.strapMaterial}</span>
              </S.ProductSpecItem>
            </S.ProductSpecCol>
          </Col>
          <Col span={12}>
            <S.ProductSpecCol>
              <S.ProductSpecItem>
                <span>Đường kính mặt</span>
                <span>{productDetail.data.caseSize} mm</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Độ dày:</span>
                <span>{productDetail.data.caseWidth} mm</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Độ chống nước:</span>
                <span>{productDetail.data.waterResist}</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Cỡ dây:</span>
                <span>{productDetail.data.strapSize} mm</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Bảo hành:</span>
                <span>{productDetail.data.warranty} Năm</span>
              </S.ProductSpecItem>
            </S.ProductSpecCol>
          </Col>
        </S.ProductSpecContainer>
      </Row>
    </main>
  );
};

export default ProductDetailPage;
