import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate, Link, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Rate,
  Tooltip,
  notification,
  Spin,
  Comment,
  Avatar,
  Form,
  Input,
  Button,
  Breadcrumb,
  InputNumber,
  Image,
} from "antd";

import ProductSpec from "./ProductSpec";
import ProductPolicy from "./ProductPolicy";
import ProductGift from "./ProductGift";
import ProductFamily from "./ProductFamily";

import {
  addItemToCartAction,
  getProductDetailAction,
  getCategoriesListAction,
  removeProductDetailAction,
  createCommentAction,
  getCommentListAction,
  addWishlistAction,
  removeWishlistAction,
  clearCommentListAction,
  getProductListUserAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

import userImg from "../../../assets/user/user.png";
import * as S from "./style";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

const ProductDetailPage = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const { id } = useParams();
  const productId = parseInt(id.split(".")[1]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productDetail, productListUser } = useSelector(
    (state) => state.product
  );
  const { userInfo } = useSelector((state) => state.user);
  const { cartList } = useSelector((state) => state.cart);

  const currentCartItem = cartList.find((item) => item.id === productId);
  const similarProductList = productListUser.data?.filter(
    (item) => item.id !== productId && item.gender === productDetail.data.gender
  );

  const isWishlist = userInfo.data.id
    ? productDetail.data.wishlists?.some(
        (item) => item.userId === userInfo.data.id
      )
    : false;

  const { commentList } = useSelector((state) => state.comments);
  const isCommented = commentList.data?.some(
    (item) => item.userId === userInfo?.data?.id
  );
  const averageRating = commentList.data
    ? commentList.data.reduce((total, item) => {
        return total + item.rating;
      }, 0) / commentList.data.length
    : undefined;

  const gender = productDetail.data.gender === "male" ? "nam" : "nữ";
  const isDiscount = !!productDetail.data.discountPercent;

  useEffect(() => {
    dispatch(getProductDetailAction({ id: productId }));
    dispatch(
      getProductListUserAction({
        params: {
          page: 1,
          limit: 999,
          isHidden: false,
          stock: 0,
        },
      })
    );

    dispatch(getCategoriesListAction());
    dispatch(getCommentListAction({ productId }));

    return () => {
      dispatch(removeProductDetailAction());
      dispatch(clearCommentListAction());
    };
  }, [productId]);

  const handleAddProductToCart = () => {
    if (userInfo.data.id) {
      dispatch(
        addItemToCartAction({
          product: productDetail,
          productAmount: productQuantity,
        })
      );
      setProductQuantity(1);

      notification.open({
        message: "Đã thêm sản phẩm vào giỏ hàng",
        placement: "top",
        top: 100,
        duration: 2,
        icon: (
          <i
            className="fa-solid fa-check"
            style={{
              color: "#335C67",
            }}
          ></i>
        ),
      });
    } else {
      notification.error({
        message: "Bạn cần đăng nhập để sử dụng chức năng này",
        top: 80,
        duration: 2,
      });
    }
  };

  const handleCreateComment = (value) => {
    if (userInfo.data.id) {
      const data = {
        ...value,
        userId: userInfo?.data?.id,
        productId: productDetail.data.id,
      };

      dispatch(createCommentAction({ data, productId }));
    } else {
      notification.error({
        message: "Bạn cần đăng nhập để sử dụng chức năng này",
        top: 80,
        duration: 2,
      });
    }
  };

  const handleToggleWishlist = () => {
    if (userInfo.data.id) {
      if (isWishlist) {
        const wishlistData = productDetail.data.wishlists?.find(
          (item) => item.userId === userInfo.data.id
        );

        if (wishlistData) {
          dispatch(
            removeWishlistAction({
              id: wishlistData.id,
              productId: productDetail.data.id,
            })
          );
        }

        notification.open({
          message: "Đã xóa sản phẩm khỏi yêu thích",
          placement: "top",
          top: 100,
          duration: 2,
          icon: (
            <i
              className="fa-solid fa-heart-crack"
              style={{
                color: "#335C67",
              }}
            ></i>
          ),
        });
      } else {
        dispatch(
          addWishlistAction({
            data: {
              userId: userInfo.data.id,
              productId: productDetail.data.id,
            },
            userId: userInfo.data.id,
          })
        );

        notification.open({
          message: "Đã thêm sản phẩm vào yêu thích",
          placement: "top",
          top: 100,
          duration: 2,
          icon: (
            <i
              className="fa-regular fa-heart"
              style={{
                color: "#335C67",
              }}
            ></i>
          ),
        });
      }
    } else {
      notification.error({
        message: "Bạn cần đăng nhập để sử dụng chức năng này",
        top: 80,
        duration: 2,
      });
    }
  };

  const renderProductSpec = useMemo(() => {
    return <ProductSpec product={productDetail} />;
  }, [productDetail.data]);

  const renderUserComments = useMemo(() => {
    return commentList.data?.map((item) => {
      return (
        <Comment
          key={item.id}
          author={<a>{item.user.userName}</a>}
          avatar={<Avatar src={userImg} alt="Han Solo" />}
          content={
            <>
              <Rate
                disabled
                allowHalf
                value={item.rating}
                style={{ fontSize: 14 }}
              />
              <p>{item.content}</p>
            </>
          }
          datetime={
            <Tooltip title={item.createdAt || "abc"}>
              <span></span>
            </Tooltip>
          }
        />
      );
    });
  }, [commentList.data]);

  const renderProductImages = useMemo(() => {
    if (!productDetail.data.images?.length) return null;
    return productDetail.data.images?.map((item) => {
      return (
        <S.CustomImage
          key={item.id}
          src={item.url}
          className="product_slide-img"
        />
      );
    });
  }, [productDetail.data]);

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form name="rate-form" onFinish={(value) => handleCreateComment(value)}>
        <Form.Item
          label="Đánh giá"
          name="rating"
          rules={[
            {
              required: true,
              message: "Chưa chọn điểm đánh giá",
            },
          ]}
        >
          <Rate allowHalf />
        </Form.Item>

        <Form.Item
          label="Nội dung"
          name="content"
          rules={[
            {
              required: true,
              message: "Chưa nhập nội dung đánh giá",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Đánh giá</Button>
        </Form.Item>
      </Form>
    </>
  );

  const items = [
    {
      label: (
        <span>
          <i
            className="fa-regular fa-file-lines"
            style={{ margin: "0 12px" }}
          ></i>
          Giới thiệu
        </span>
      ),
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
      label: (
        <span>
          <i className="fa-regular fa-comment" style={{ margin: "0 12px" }}></i>
          Đánh giá
        </span>
      ),
      key: "item-2",
      children: (
        <S.ProductReview>
          {!isCommented ? (
            <p>Hãy để lại đánh giá của bạn nhé</p>
          ) : (
            <p>Cảm ơn bạn đã đánh giá sản phẩm</p>
          )}
          {!isCommented && <Comment content={<Editor />} />}

          <S.ReviewsWrapper>
            {commentList.data.length === 0 ? (
              <p>Chưa có đánh giá nào.</p>
            ) : (
              <h3>Đánh giá({commentList.data.length})</h3>
            )}
            {renderUserComments}
          </S.ReviewsWrapper>
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
      <S.TopSpacer></S.TopSpacer>

      <S.BreadcrumbWrapper>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={ROUTES.USER.HOME}>Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={ROUTES.USER.BRAND}>Sản phẩm</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              onClick={(e) => {
                e.preventDefault();
                navigate(ROUTES.USER.BRAND, {
                  state: {
                    category: productDetail.data.category,
                  },
                });
              }}
            >
              {productDetail.data.category?.name}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{productDetail.data.name}</Breadcrumb.Item>
        </Breadcrumb>
      </S.BreadcrumbWrapper>

      <S.ProductDetailContainer>
        <Row gutter={[8, 8]}>
          <Col xxl={8} xl={8} md={8} sm={24} xs={24}>
            <S.ProductImageWrapper>
              <img src={productDetail.data.image} alt="product" />

              {/* slider cho ảnh thật sau này, cấm xóa */}
              {/* <Slider
                {...settings}
                customPaging={(i) => {
                  return (
                    <div className="thumb_img-wrapper">
                      <img src={productDetail.data.images[i].url} alt="" />
                    </div>
                  );
                }}
                dotsClass="slick-dots custom-indicator"
              >
                {renderProductImages}
              </Slider> */}

              {productDetail.data.isDiscount && (
                <div className="product_info-discount-label">
                  <span>- {productDetail.data.discountPercent}%</span>
                </div>
              )}

              <div className="product_like-icon">
                <Button
                  size="small"
                  danger={isWishlist}
                  icon={
                    isWishlist ? (
                      <i
                        className="fa-solid fa-heart"
                        style={{ marginRight: 4 }}
                      ></i>
                    ) : (
                      <i
                        className="fa-regular fa-heart"
                        style={{ marginRight: 4 }}
                      ></i>
                    )
                  }
                  onClick={() => handleToggleWishlist()}
                >
                  {" "}
                  {productDetail.data.wishlists?.length || 0} thích{" "}
                </Button>
              </div>
            </S.ProductImageWrapper>
          </Col>
          <Col xxl={10} xl={10} md={10} sm={24} xs={24}>
            <S.ProductInfoWrapper>
              <S.ProductSummary>
                <h2>{productDetail.data.name}</h2>
                <div className="product_rating">
                  <Rate disabled allowHalf value={averageRating} />
                  <span className="product_rating-quantity">
                    (
                    {commentList.data
                      ? `${commentList.data.length} đánh giá`
                      : "Chưa có đánh giá nào"}
                    )
                  </span>
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

                <p className="product_summary-stock">
                  Kho: {productDetail.data.stock}
                </p>
              </S.ProductSummary>

              <ProductGift discount={productDetail.data.discountPercent} />

              <S.ProductActions>
                <div className="product_action-addcart">
                  <Row gutter={[8, 8]}>
                    <Col span={12}>
                      <span>Số lượng: </span>

                      <InputNumber
                        min={1}
                        max={
                          currentCartItem?.totalAmount
                            ? productDetail.data.stock -
                              currentCartItem?.totalAmount
                            : productDetail.data.stock
                        }
                        value={productQuantity}
                        onChange={(value) => setProductQuantity(value)}
                      />
                    </Col>

                    <Col span={12}>
                      <Button
                        size="large"
                        onClick={handleAddProductToCart}
                        block
                        disabled={
                          productDetail.data.stock ===
                          currentCartItem?.totalAmount
                        }
                      >
                        <i
                          className="fa-solid fa-cart-plus"
                          style={{ marginRight: 12 }}
                        ></i>
                        THÊM VÀO GIỎ
                      </Button>
                    </Col>

                    <Col span={24}>
                      <Button
                        size="large"
                        disabled={
                          productDetail.data.stock ===
                          currentCartItem?.totalAmount
                        }
                        onClick={() => {
                          handleAddProductToCart();
                          if (userInfo.data.id)
                            navigate(ROUTES.USER.CART_SUMMARY);
                        }}
                        style={{ width: "100%" }}
                      >
                        MUA NGAY
                      </Button>
                    </Col>
                  </Row>
                </div>
              </S.ProductActions>
            </S.ProductInfoWrapper>
          </Col>
          <Col xxl={6} xl={6} md={6} sm={24} xs={24}>
            <ProductPolicy />
          </Col>
        </Row>
      </S.ProductDetailContainer>

      <S.BottomWrapper>
        <Row gutter={[8, 8]}>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            {renderProductSpec}
          </Col>

          <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
            <S.InfoTabs type="card" items={items} defaultActiveKey="item-1" />
          </Col>
        </Row>
      </S.BottomWrapper>

      <ProductFamily similarProductList={similarProductList} />
    </S.Wrapper>
  );
};

export default ProductDetailPage;
