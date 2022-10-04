import { useNavigate } from "react-router-dom";

import { Col, Row } from "antd";

import menProducts from "../../../assets/fakedata/products/men";
import * as S from "./CasioProduct.style";

const CasioProducts = () => {
  menProducts.splice(4);
  const navigate = useNavigate();

  const handleNavigateProductPage = (gender, id) => {
    if (gender === "male") {
      navigate(`/men/${id}`);
    } else {
      navigate(`/women/${id}`);
    }
  };

  const renderMenProducts = () => {
    return (
      <Row gutter={6}>
        {menProducts.map((product) => {
          return (
            <Col xl={6} md={6} sm={8} xm={8} key={product.id}>
              <S.Product
                onClick={() =>
                  handleNavigateProductPage(product.gender, product.id)
                }
              >
                <img src={product.image} alt="product" />
                <h2>{product.name}</h2>
                <p>{product.price.toLocaleString()}đ</p>
                <p>{product.category}</p>
              </S.Product>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <S.CasioSectionWrapper>
      <div>
        <img
          alt="casio"
          src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/watch/casio.png"
        />
      </div>
      <S.ProductWrapper>{renderMenProducts()}</S.ProductWrapper>
    </S.CasioSectionWrapper>
  );
};

export default CasioProducts;
