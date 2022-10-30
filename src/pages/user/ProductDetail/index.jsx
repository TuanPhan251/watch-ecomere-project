import React, { useEffect, useState, useMemo, createElement } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Rate,
  Tooltip,
  notification,
  Skeleton,
  Spin,
  Comment,
  Avatar,
  Tabs,
} from "antd";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";

import ProductSpec from "./ProductSpec";
import ProductPolicy from "./ProductPolicy";
import ProductGift from "./ProductGift";

import MainButton from "../../../components/MainButton";

import {
  addItemToCartAction,
  getProductDetailAction,
  getCategoriesListAction,
  removeProductDetailAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

import * as S from "./style";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);
  const { id } = useParams();
  const productId = parseInt(id.split(".")[1]);
  const gender = productDetail.data.gender === "male" ? "nam" : "nữ";
  const isDiscount = !!productDetail.data.discountPercent;

  const [itemQuantity, setItemQuantity] = useState(1);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };
  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const handleAddProductToCart = () => {
    dispatch(
      addItemToCartAction({
        product: productDetail,
        productAmount: itemQuantity,
      })
    );

    notification.open({
      message: "Đã thêm sản phẩm vào giỏ hàng",
      placement: "top",
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

  const handleGetItemQuantity = (value) => {
    if (value < 1) {
      setItemQuantity(1);
    } else {
      setItemQuantity(parseInt(value));
    }
  };

  useEffect(() => {
    dispatch(getProductDetailAction({ id: productId }));

    dispatch(getCategoriesListAction());

    return () => {
      dispatch(removeProductDetailAction());
    };
  }, [productId]);

  const renderProductSpec = useMemo(() => {
    return <ProductSpec product={productDetail} />;
  }, [productDetail.data]);

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  const items = [
    {
      label: "Giới thiệu sản phẩm",
      key: "item-1",
      children: (
        <S.ProductContent>
          <div
            className="product_content-main"
            dangerouslySetInnerHTML={{
              __html: productDetail.data.content || "content here",
            }}
          ></div>
        </S.ProductContent>
      ),
    },
    {
      label: "Nhận xét và đánh giá",
      key: "item-2",
      children: (
        <S.ProductReview>
          <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
            datetime={
              <Tooltip title="2016-11-22 11:22:33">
                <span>8 hours ago</span>
              </Tooltip>
            }
          />
        </S.ProductReview>
      ),
    },
  ];

  if (productDetail.loading)
    return (
      <S.Wrapper>
        <Spin spinning={productDetail.loading}>
          <div style={{ minHeight: "100vh", backgroundColor: "#FFF" }}></div>
        </Spin>
      </S.Wrapper>
    );

  return (
    <S.Wrapper>
      <S.ProductDetailContainer>
        <Row gutter={[8, 8]}>
          <Col xxl={8} xl={8} md={24} sm={24} xm={24}>
            <S.ProductImageWrapper>
              <img src={productDetail.data.image} alt="product" />
              {productDetail.data.isDiscount && (
                <div className="product_info-discount-label">
                  <span>- {productDetail.data.discountPercent}%</span>
                </div>
              )}
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
                    {productDetail.data?.finalPrice?.toLocaleString()}
                    <sup>₫</sup>
                  </span>
                  {isDiscount && (
                    <span className="product_summary-price-original">
                      {productDetail.data?.price?.toLocaleString()}
                      <sup>₫</sup>
                    </span>
                  )}
                </p>
              </S.ProductSummary>

              <ProductGift discount={productDetail.data.discountPercent} />

              <S.ProductActions>
                <div className="product_action-addcart">
                  <div className="product_action-addcart-quantity">
                    <span>Số lượng: </span>

                    <MainButton
                      className="quantity_control-btn"
                      buttonType="ghost"
                      onClick={() => {
                        itemQuantity !== 1 && setItemQuantity(itemQuantity - 1);
                      }}
                    >
                      -
                    </MainButton>
                    <input
                      type="text"
                      value={itemQuantity}
                      min={1}
                      onChange={(e) => handleGetItemQuantity(e.target.value)}
                    />
                    <MainButton
                      buttonType="ghost"
                      className="quantity_control-btn"
                      onClick={() => setItemQuantity(itemQuantity + 1)}
                    >
                      +
                    </MainButton>
                  </div>

                  <MainButton
                    buttonType="primary"
                    onClick={handleAddProductToCart}
                    style={{ marginLeft: "auto", width: "50%" }}
                  >
                    THÊM VÀO GIỎ
                  </MainButton>
                </div>

                <MainButton
                  onClick={() => {
                    handleAddProductToCart();
                    navigate(ROUTES.USER.CART_SUMMARY);
                  }}
                  buttonType="primary"
                  style={{ width: "100%" }}
                >
                  MUA NGAY
                </MainButton>
              </S.ProductActions>
            </S.ProductInfoWrapper>
          </Col>
          <Col xxl={6} xl={6} md={24} sm={24} xm={24}>
            <ProductPolicy />
          </Col>
        </Row>
      </S.ProductDetailContainer>

      <S.BottomWrapper>
        <Row gutter={[8, 8]}>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            {renderProductSpec}
          </Col>

          <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
            <S.InfoTabs type="card" items={items} defaultActiveKey="item-1" />
          </Col>
        </Row>
      </S.BottomWrapper>
    </S.Wrapper>
  );
};

export default ProductDetailPage;
