import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductListAction } from "../../../redux/actions";

import { Col, Row } from "antd";

import * as S from "./style";

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
        <Col xl={12} md={12} sm={12} xm={12} key={product.id}>
          <S.Product onClick={() => navigate(`/san-pham/${product.id}`)}>
            <img src={product.image} alt="product" />
            <h2>{product.name}</h2>
          </S.Product>
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
