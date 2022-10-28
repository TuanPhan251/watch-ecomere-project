import { Row, Col, Skeleton } from "antd";

import * as S from "../style";

const ProductDetailSkeleton = (props) => {
  return (
    <S.Wrapper>
      <S.ProductDetailContainer>
        <Row gutter={[8, 8]}>
          <Col xxl={8} xl={8} md={24} sm={24} xm={24}>
            <S.ProductImageWrapper>
              {/* <img src={productDetail.data.image} alt="product" />

              {productDetail.data.isDiscount && (
                <div className="product_info-discount-label">
                  <span>- {productDetail.data.discountPercent}%</span>
                </div>
              )} */}

              <Skeleton.Image active={props.loading} loading={props.loading} />
            </S.ProductImageWrapper>
          </Col>
          <Col xxl={10} xl={10} md={24} sm={24} xm={24}>
            <S.ProductInfoWrapper>
              <S.ProductSummary>
                <Skeleton
                  active={props.loading}
                  loading={props.loading}
                  paragraph={{ rows: 5 }}
                ></Skeleton>
                {/* <h2>{productDetail.data.name}</h2>

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
                </p> */}
              </S.ProductSummary>

              {/* <ProductGift discount={productDetail.data.discountPercent} /> */}
              <Skeleton
                active={props.loading}
                loading={props.loading}
                paragraph={{ rows: 4 }}
              ></Skeleton>

              <S.ProductActions>
                <div className="product_action-addcart">
                  <div className="product_action-addcart-quantity">
                    <Skeleton.Button
                      active={props.loading}
                      loading={props.loading}
                      style={{ width: "50%" }}
                    />
                    <Skeleton.Button
                      active={props.loading}
                      loading={props.loading}
                      style={{ width: "50%" }}
                    />

                    {/* <span>Số lượng: </span>

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
                    </MainButton> */}
                  </div>

                  {/* <MainButton
                    buttonType="primary"
                    onClick={handleAddProductToCart}
                    style={{ marginLeft: "auto", width: "50%" }}
                  >
                    THÊM VÀO GIỎ
                  </MainButton> */}
                </div>

                <Skeleton.Button
                  active={props.loading}
                  loading={props.loading}
                  style={{ width: "100%" }}
                />
                {/* <MainButton
                  onClick={() => {
                    handleAddProductToCart();
                    navigate(ROUTES.USER.CHECKOUT);
                  }}
                  buttonType="primary"
                  style={{ width: "100%" }}
                >
                  MUA NGAY
                </MainButton> */}
              </S.ProductActions>
            </S.ProductInfoWrapper>
          </Col>
          <Col xxl={6} xl={6} md={24} sm={24} xm={24}>
            {/* <ProductPolicy /> */}
            <Skeleton
              active
              loading={props.loading}
              title={false}
              paragraph={{ rows: 3 }}
            />
            <Skeleton active loading={props.loading} paragraph={{ rows: 3 }} />
            <Skeleton active loading={props.loading} paragraph={{ rows: 3 }} />
          </Col>
        </Row>
      </S.ProductDetailContainer>

      <S.BottomWrapper>
        <Row gutter={[8, 8]}>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            {/* {renderProductSpec} */}
            <Skeleton active loading={props.loading} paragraph={{ rows: 10 }} />
          </Col>

          <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
            <S.ProductContent>
              {/* <h3 className="product_content-heading">Giới thiệu sản phẩm</h3>

              <div
                className="product_content-main"
                dangerouslySetInnerHTML={{
                  __html: productDetail.data.content || "content here",
                }}
              ></div> */}
              <Skeleton
                active
                loading={props.loading}
                paragraph={{ rows: 12 }}
              />
            </S.ProductContent>
          </Col>
        </Row>
      </S.BottomWrapper>
    </S.Wrapper>
  );
};

export default ProductDetailSkeleton;
