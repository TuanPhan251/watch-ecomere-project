import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
} from "antd";
import ProductSpec from "./ProductSpec";
import ProductPolicy from "./ProductPolicy";
import ProductGift from "./ProductGift";
import ProductFamily from "./ProductFamily";

import MainButton from "../../../components/MainButton";

import {
  addItemToCartAction,
  getProductDetailAction,
  getCategoriesListAction,
  removeProductDetailAction,
  createCommentAction,
  getCommentListAction,
  getProductListAction,
  getWishlistAction,
  addWishlistAction,
  removeWishlistAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

import * as S from "./style";

const ProductDetailPage = () => {
  const { id } = useParams();
  const productId = parseInt(id.split(".")[1]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productDetail, productList } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.user);
  const similarProductList = productList.data?.filter(
    (item) => item.id !== productId
  );

  const { wishlist } = useSelector((state) => state.wishlist);
  const isWishlist = wishlist.data.some(
    (item) => item.productId === productDetail.data.id
  );

  const { commentList } = useSelector((state) => state.comments);
  const isCommented = commentList.data?.some(
    (item) => item.userId === userInfo?.data?.id
  );

  const gender = productDetail.data.gender === "male" ? "nam" : "nữ";
  const isDiscount = !!productDetail.data.discountPercent;

  const [itemQuantity, setItemQuantity] = useState(1);

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: 999,
          gender: productDetail.data.gender,
        },
      })
    );
  }, [productId]);

  useEffect(() => {
    dispatch(getProductDetailAction({ id: productId }));

    dispatch(getCategoriesListAction());
    dispatch(getCommentListAction({ productId }));
    dispatch(getWishlistAction({ userId: userInfo.data.id }));

    return () => {
      dispatch(removeProductDetailAction());
    };
  }, [productId]);

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
            color: "#335C67",
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

  const handleCreateComment = (value) => {
    const data = {
      ...value,
      userName: userInfo?.data?.userName,
      userId: userInfo?.data?.id,
      productId: productDetail.data.id,
    };

    dispatch(createCommentAction({ data, productId }));
  };

  const handleAddItemToWishlist = () => {
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
  };

  const handleRemoveItemWishlist = () => {
    const deletedWishlist = Object.assign(
      {},
      ...wishlist.data.filter(
        (item) => item.productId === productDetail.data.id
      )
    );
    console.log(
      "🚀 ~ file: index.jsx ~ line 150 ~ handleRemoveItemWishlist ~ deletedWishlist",
      deletedWishlist
    );

    dispatch(
      removeWishlistAction({ id: deletedWishlist.id, userId: userInfo.data.id })
    );

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
  };

  const renderProductSpec = useMemo(() => {
    return <ProductSpec product={productDetail} />;
  }, [productDetail.data]);

  const renderUserComments = useMemo(() => {
    return commentList.data?.map((item) => {
      return (
        <Comment
          key={item.id}
          author={<a>{item.userName}</a>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={
            <>
              <Rate disabled value={item.rating} style={{ fontSize: 14 }} />
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
      return <img src={item.image} alt={item.name} />;
    });
  }, [productDetail.data]);

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
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
          {!isCommented && <Comment content={<Editor />} />}
          {renderUserComments}
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
          <Breadcrumb.Item>{productDetail.data.name}</Breadcrumb.Item>
        </Breadcrumb>
      </S.BreadcrumbWrapper>

      <S.ProductDetailContainer>
        <Row gutter={[8, 8]}>
          <Col xxl={8} xl={8} md={8} sm={24} xs={24}>
            <S.ProductImageWrapper>
              <img src={productDetail.data.image} alt="product" />
              {/* {renderProductImages} */}

              {productDetail.data.isDiscount && (
                <div className="product_info-discount-label">
                  <span>- {productDetail.data.discountPercent}%</span>
                </div>
              )}

              <div className="product_like-icon">
                {isWishlist ? (
                  <Tooltip title="Xóa khỏi yêu thích">
                    <S.AddWishlistBtn
                      isWishlist={isWishlist}
                      onClick={() => handleRemoveItemWishlist()}
                    >
                      <i className="fa-solid fa-heart"></i>
                    </S.AddWishlistBtn>
                  </Tooltip>
                ) : (
                  <Tooltip title="Thêm vào yêu thích">
                    <S.AddWishlistBtn
                      isWishlist={isWishlist}
                      onClick={() => handleAddItemToWishlist()}
                    >
                      <i className="fa-regular fa-heart"></i>
                    </S.AddWishlistBtn>
                  </Tooltip>
                )}
              </div>
            </S.ProductImageWrapper>
          </Col>
          <Col xxl={10} xl={10} md={10} sm={24} xs={24}>
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
