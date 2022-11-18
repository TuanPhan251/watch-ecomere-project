import { generatePath, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Col, Row } from "antd";

import * as S from "./style";
import { ROUTES } from "../../../../constants/routes";

const HomeProductList = ({ gender }) => {
  const { productListUser } = useSelector((state) => state.product);

  const genderProduct = productListUser.data?.filter(
    (item) => item.gender === gender
  );

  const shuffled = genderProduct?.sort(() => 0.5 - Math.random());
  const selected = shuffled?.slice(0, 4);

  const renderMenProducts = () => {
    return selected?.map((product) => {
      return (
        <Col span={12} key={product.id}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: `${product.slug}.${product.id}`,
            })}
          >
            <S.Product>
              <div className="product__img">
                <img src={product.images[0].url} alt="product" />
              </div>
              <h2>{product.name}</h2>
            </S.Product>
          </Link>
        </Col>
      );
    });
  };

  return (
    <S.HomeProductWrapper>
      <div className="products-wrapper">
        <Row gutter={[8, 16]}>{renderMenProducts()}</Row>
      </div>
    </S.HomeProductWrapper>
  );
};

export default HomeProductList;
