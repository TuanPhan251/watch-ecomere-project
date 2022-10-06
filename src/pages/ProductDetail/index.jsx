import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Space } from "antd";

import { addProductAction } from "../../redux/actions";

import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
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
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <Row gutter={4}>
          <S.ProductDetailContainer>
            <Col span={10}>
              <S.ProductImageWrapper>
                <img src={product.image} alt="product" />
              </S.ProductImageWrapper>
            </Col>
            <Col span={14}>
              <S.ProductSummary>
                <h2>{product.name}</h2>
                <S.ProductSummaryItem>
                  Thương hiệu: {product.category}
                </S.ProductSummaryItem>
                <S.ProductSummaryItem>
                  Loại sản phẩm:{" "}
                  {product.gender === "male" ? "Đồng Hồ Nam" : "Đồng Hồ Nữ"}
                </S.ProductSummaryItem>
                <S.ProductPrice>
                  GIÁ: {product.price.toLocaleString()} VNĐ
                </S.ProductPrice>
              </S.ProductSummary>

              <S.PolicyActionWrapper>
                <S.ProductPolicy>
                  <S.ProductPolicyItem>
                    <i className="fa-solid fa-truck"></i>
                    <span>Miễn phí vận chuyển trên toàn quốc.</span>
                  </S.ProductPolicyItem>
                  <S.ProductPolicyItem>
                    <i className="fa-solid fa-heart-crack"></i>
                    <span>Bảo hành chính hãng tại trung tâm ủy quyền.</span>
                  </S.ProductPolicyItem>
                  <S.ProductPolicyItem>
                    <i className="fa-solid fa-arrows-rotate"></i>
                    <span>
                      Đổi trả miễn phí trong 30 ngày khi có lỗi nhà sản xuất.
                    </span>
                  </S.ProductPolicyItem>
                </S.ProductPolicy>

                <S.ProductAction>
                  <Button type="primary">MUA NGAY</Button>
                  <Button onClick={handleAddProductToCart}>THÊM VÀO GIỎ</Button>
                </S.ProductAction>
              </S.PolicyActionWrapper>
            </Col>
          </S.ProductDetailContainer>
        </Row>

        <Row>
          <S.ProductSpecContainer>
            <S.ProductSpecHeading>
              Chi tiết thông số sản phẩm
            </S.ProductSpecHeading>

            <Col span={12}>
              <S.ProductSpecCol>
                <S.ProductSpecItem>
                  <span>Giới tính:</span>
                  <span>{product.gender === "male" ? "Nam" : "Nữ"}</span>
                </S.ProductSpecItem>
                <S.ProductSpecItem>
                  <span>Kiểu máy:</span>
                  <span>{product.movement}</span>
                </S.ProductSpecItem>
                <S.ProductSpecItem>
                  <span>Chất liệu kính:</span>
                  <span>{product.glassMaterial}</span>
                </S.ProductSpecItem>
                <S.ProductSpecItem>
                  <span>Chất liệu vỏ:</span>
                  <span>{product.caseMaterial}</span>
                </S.ProductSpecItem>
                <S.ProductSpecItem>
                  <span>Chất liệu dây:</span>
                  <span>{product.strapMaterial}</span>
                </S.ProductSpecItem>
              </S.ProductSpecCol>
            </Col>
            <Col span={12}>
              <S.ProductSpecCol>
                <S.ProductSpecItem>
                  <span>Đường kính mặt</span>
                  <span>{product.caseSize} mm</span>
                </S.ProductSpecItem>
                <S.ProductSpecItem>
                  <span>Độ dày:</span>
                  <span>{product.caseWidth} mm</span>
                </S.ProductSpecItem>
                <S.ProductSpecItem>
                  <span>Độ chống nước:</span>
                  <span>{product.waterResist}</span>
                </S.ProductSpecItem>
                <S.ProductSpecItem>
                  <span>Cỡ dây:</span>
                  <span>{product.strapSize} mm</span>
                </S.ProductSpecItem>
                <S.ProductSpecItem>
                  <span>Bảo hành:</span>
                  <span>{product.warranty} Năm</span>
                </S.ProductSpecItem>
              </S.ProductSpecCol>
            </Col>
          </S.ProductSpecContainer>
        </Row>
        <ScrollTopButton />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
