import { useNavigate } from "react-router-dom";

import { Select, Pagination, Row, Col } from "antd";

import menProducts from "../../assets/fakedata/products/men";

import ScrollTopButton from "../../components/ScrollTopButton";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

import * as S from "./style";

const { Option } = Select;

const ProductPage = () => {
  const navigate = useNavigate();

  const renderProducts = () => {
    return menProducts.map((item) => {
      return (
        <Col
          key={item.id}
          xl={4}
          md={6}
          sm={8}
          xm={12}
          onClick={() => navigate(`/san-pham/${item.id}`)}
        >
          <S.ProductItem>
            <img src={item.image} alt="item" />
            <h2>{item.name}</h2>
            <p>{item.price.toLocaleString()}đ</p>
            <p>{item.category}</p>
          </S.ProductItem>
        </Col>
      );
    });
  };

  return (
    <>
      <Header />
      <main>
        <S.ProductPageWrapper>
          <S.ProductBrands>
            <S.ProductBrandItem>
              <img
                alt="Casio logo"
                src="https://cdn.tgdd.vn/Brand/1/Casio7264-b_39.jpg"
              />
            </S.ProductBrandItem>
            <S.ProductBrandItem>
              <img
                alt="Orient logo"
                src="https://cdn.tgdd.vn/Brand/1/ORIENTl-220x48.jpg"
              />
            </S.ProductBrandItem>
            <S.ProductBrandItem>
              <img
                alt="Citizen logo"
                src="https://cdn.tgdd.vn/Brand/1/Citizen7264-b_41.jpg"
              />
            </S.ProductBrandItem>
            <S.ProductBrandItem>
              <img
                alt="Anne logo"
                src="https://cdn.tgdd.vn/Brand/1/ANNEKLEINl-220x48.jpg"
              />
            </S.ProductBrandItem>
            <S.ProductBrandItem>
              <img
                alt="Tissot logo"
                src="https://cdn.tgdd.vn/Brand/1/MATHEYTISSOTl-220x48.jpg"
              />
            </S.ProductBrandItem>
          </S.ProductBrands>

          <S.ProductFilterWrapper>
            <span>Bộ lọc: </span>
            <Select
              allowClear
              placeholder="Giá"
              style={{
                width: 120,
                marginLeft: "8px",
              }}
            >
              <Option value="low-high">Thấp - Cao</Option>
              <Option value="high-low">Cao - Thấp</Option>
            </Select>
            <Select
              allowClear
              placeholder="Loại máy"
              style={{
                width: 160,
                marginLeft: "8px",
              }}
            >
              <Option value="automatic">Cơ tự động(automatic)</Option>
              <Option value="pin">Dùng pin</Option>
            </Select>
            <Select
              allowClear
              placeholder="Đường kính mặt"
              style={{
                width: 160,
                marginLeft: "8px",
              }}
            >
              <Option value="36">Dưới 36mm</Option>
              <Option value="36-40">Từ 36mm - 40mm</Option>
              <Option value="40-44">Từ 40mm - 44mm</Option>
              <Option value="44">Trên 44mm</Option>
            </Select>
            <Select
              allowClear
              placeholder="Chất liệu kính"
              style={{
                width: 160,
                marginLeft: "8px",
              }}
            >
              <Option value="mineral">Kính khoáng</Option>
              <Option value="sapphire">Sapphire</Option>
            </Select>
          </S.ProductFilterWrapper>

          <S.ProductsWrapper>
            <Row gutter={[4, 4]}>
              {renderProducts()}
              {renderProducts()}
              {renderProducts()}
              {renderProducts()}
            </Row>
          </S.ProductsWrapper>

          <Pagination
            defaultCurrent={1}
            total={50}
            style={{
              padding: "24px 0",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </S.ProductPageWrapper>
      </main>
      <ScrollTopButton />
      <Footer />
    </>
  );
};

export default ProductPage;
