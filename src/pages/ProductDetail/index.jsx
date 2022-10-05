import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Space } from "antd";

import { addProductAction } from "../../redux/actions";

import ScrollTopButton from "../../components/ScrollTopButton";

import menProducts from "../../assets/fakedata/products/men";
import * as S from "./style";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = menProducts.find((item) => item.id === id);

  const dispatch = useDispatch();

  const handleAddProductToCart = () => {
    dispatch(addProductAction({ data: product }));
  };

  return (
    <>
      <main>
        <Row gutter={4}>
          <S.ProductDetailContainer>
            <Col span={8}>
              <S.ProductImageWrapper>
                <img src={product.image} alt="product" />
              </S.ProductImageWrapper>
            </Col>
            <Col span={10}>
              <div>
                <p>{product.category}</p>
                <h2>{product.name}</h2>
              </div>
            </Col>
            <Col span={6}>
              <S.ProductPriceWrapper>
                <p>Giá: {product.price.toLocaleString()}đ</p>

                <S.ProductPriceAction>
                  <Space>
                    <Button type="primary">MUA NGAY</Button>
                    <Button type="danger" onClick={handleAddProductToCart}>
                      THÊM VÀO GIỎ
                    </Button>
                  </Space>
                </S.ProductPriceAction>
              </S.ProductPriceWrapper>
            </Col>
          </S.ProductDetailContainer>
        </Row>
        <ScrollTopButton />
      </main>
    </>
  );
};

export default ProductDetailPage;
