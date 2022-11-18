import { useMemo } from "react";
import { generatePath, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Col, Rate, Row, Spin } from "antd";
import { ROUTES } from "../../../../constants/routes";

import * as S from "./styles";

const ProductFamily = ({ similarProductList }) => {
  const { productListUser } = useSelector((state) => state.product);

  const shuffled = similarProductList.sort(() => 0.5 - Math.random());
  const selectedProducts = shuffled.slice(0, 8);

  const renderSimilarProduct = useMemo(() => {
    return selectedProducts.map((item) => {
      const haveComment = item.comments.length !== 0;
      const averageRating = haveComment
        ? item.comments.reduce((total, comment) => {
            return total + comment.rating;
          }, 0) / item.comments.length
        : undefined;
      const discountPercent = `-${item.discountPercent}%`;
      let price = item.price;
      if (item.isDiscount) {
        price = item.finalPrice;
      }

      return (
        <Col key={item.id} xxl={6} xl={6} md={6} sm={8} xs={12}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: `${item.slug}.${item.id}`,
            })}
          >
            <S.ProductItem>
              <div className="product_info-image">
                <img src={item.images[0].url} alt="item" />
              </div>

              <h2 className="product_info-name">{item.name}</h2>

              <div className="product_info-rating">
                <Rate
                  allowHalf
                  disabled
                  value={averageRating}
                  style={{ fontSize: 14 }}
                />
                {haveComment && <span>({item.comments?.length} đánh giá)</span>}
              </div>

              <p className="product_info-price-final">
                {price.toLocaleString()}
                <sup>₫</sup>
              </p>
              {item.isDiscount && (
                <p className="product_info-price-original">
                  {item.price.toLocaleString()}
                  <sup>₫</sup>
                </p>
              )}

              {item.isDiscount && (
                <div className="product_info-discount-label">
                  <span>{discountPercent}</span>
                </div>
              )}
              {item.isNew && (
                <div className="product_info-isNew-label">
                  <span>Mới</span>
                </div>
              )}
            </S.ProductItem>
          </Link>
        </Col>
      );
    });
  }, [productListUser.data]);

  return (
    <S.ProductFamilyWrapper>
      <h3 className="product_family-heading">Sản phẩm tương tự</h3>
      <Spin spinning={productListUser.loading}>
        <S.ProductsWrapper>
          <Row gutter={[8, 8]}>{renderSimilarProduct}</Row>
        </S.ProductsWrapper>
      </Spin>
    </S.ProductFamilyWrapper>
  );
};

export default ProductFamily;
