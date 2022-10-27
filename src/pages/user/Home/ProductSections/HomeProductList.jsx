import { generatePath, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductListAction } from "../../../../redux/actions";

import { Col, Row } from "antd";

import * as S from "./style";
import { ROUTES } from "../../../../constants/routes";

const HomeProductList = ({ gender }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  const displayProducts = productList.data.filter(
    (product) => product.gender === gender
  );
  displayProducts.splice(4);

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: 999,
        },
      })
    );
  }, []);

  const renderMenProducts = () => {
    return displayProducts.map((product) => {
      return (
        <Col span={12} key={product.id}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: `${product.slug}.${product.id}`,
            })}
          >
            <S.Product>
              <img src={product.image} alt="product" />
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
