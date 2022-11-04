import { useMemo } from "react";
import { useNavigate, generatePath } from "react-router-dom";
import { useSelector } from "react-redux";

import { Col, Rate, Row, Spin } from "antd";
import { ROUTES } from "../../../../constants/routes";

import * as S from "./styles";

const ProductFamily = ({ similarProductList }) => {
  const navigate = useNavigate();

  const { productList } = useSelector((state) => state.product);

  const shuffled = similarProductList.sort(() => 0.5 - Math.random());
  const selectedProducts = shuffled.slice(0, 8);

  const renderSimilarProduct = useMemo(() => {
    return selectedProducts.map((item) => {
      const isDiscount = !!item.discountPercent;
      const discountPercent = `-${item.discountPercent}%`;
      let price = item.price;
      if (isDiscount) {
        price = item.finalPrice;
      }

      return (
        <Col
          key={item.id}
          xxl={6}
          xl={6}
          md={6}
          sm={8}
          xs={12}
          onClick={() =>
            navigate(
              generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                id: `${item.slug}.${item.id}`,
              })
            )
          }
        >
          <S.ProductItem>
            <div className="product_info-image">
              <img src={item.image} alt="item" />
              <div className="product_item-actions"></div>
            </div>

            <h2 className="product_info-name">{item.name}</h2>

            <div className="product_info-rating">
              <Rate
                allowHalf
                disabled
                defaultValue={4.5}
                style={{ fontSize: 14 }}
              />
              <span>(12 đánh giá)</span>
            </div>

            <p className="product_info-price-final">
              {price.toLocaleString()}
              <sup>₫</sup>
            </p>
            {isDiscount && (
              <p className="product_info-price-original">
                {item.price.toLocaleString()}
                <sup>₫</sup>
              </p>
            )}

            {isDiscount && (
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
        </Col>
      );
    });
  }, [productList.data]);

  return (
    <S.ProductFamilyWrapper>
      <h3 className="product_family-heading">Sản phẩm tương tự</h3>
      <Spin spinning={productList.loading}>
        <S.ProductsWrapper>
          <Row gutter={[8, 8]}>{renderSimilarProduct}</Row>
        </S.ProductsWrapper>
      </Spin>
    </S.ProductFamilyWrapper>
  );
};

export default ProductFamily;
