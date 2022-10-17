import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Space } from "antd";

import {
  addProductAction,
  getProductDetailAction,
  getCategoriesListAction,
} from "../../redux/actions";
import { ROUTES } from "../../constants/routes";

import * as S from "./style";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);
  const { id } = useParams();

  const handleAddProductToCart = () => {
    dispatch(addProductAction({ product: productDetail }));
  };

  useEffect(() => {
    dispatch(getProductDetailAction({ id: id }));

    dispatch(getCategoriesListAction());
  }, []);

  return (
    <main style={{ minHeight: "100vh" }}>
      <Row gutter={4}>
        <S.ProductDetailContainer>
          <Col span={10}>
            <S.ProductImageWrapper>
              <img src={productDetail.data.image} alt="product" />
            </S.ProductImageWrapper>
          </Col>
          <Col span={14}>
            <S.ProductSummary>
              <h2>{productDetail.data.name}</h2>
              <S.ProductSummaryItem>
                Thương hiệu: {productDetail.data.category?.name}
              </S.ProductSummaryItem>
              <S.ProductSummaryItem>
                Loại sản phẩm:{" "}
                {productDetail.data.gender === "male"
                  ? "Đồng Hồ Nam"
                  : "Đồng Hồ Nữ"}
              </S.ProductSummaryItem>
              <S.ProductPrice>
                GIÁ: {productDetail.data.price?.toLocaleString()} VNĐ
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
                <Button
                  type="primary"
                  onClick={() => {
                    handleAddProductToCart();
                    navigate(ROUTES.USER.CHECKOUT);
                  }}
                >
                  MUA NGAY
                </Button>
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
                <span>
                  {productDetail.data.gender === "male" ? "Nam" : "Nữ"}
                </span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Kiểu máy:</span>
                <span>{productDetail.data.movement}</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Chất liệu kính:</span>
                <span>{productDetail.data.glassMaterial}</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Chất liệu vỏ:</span>
                <span>{productDetail.data.caseMaterial}</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Chất liệu dây:</span>
                <span>{productDetail.data.strapMaterial}</span>
              </S.ProductSpecItem>
            </S.ProductSpecCol>
          </Col>
          <Col span={12}>
            <S.ProductSpecCol>
              <S.ProductSpecItem>
                <span>Đường kính mặt</span>
                <span>{productDetail.data.caseSize} mm</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Độ dày:</span>
                <span>{productDetail.data.caseWidth} mm</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Độ chống nước:</span>
                <span>{productDetail.data.waterResist}</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Cỡ dây:</span>
                <span>{productDetail.data.strapSize} mm</span>
              </S.ProductSpecItem>
              <S.ProductSpecItem>
                <span>Bảo hành:</span>
                <span>{productDetail.data.warranty} Năm</span>
              </S.ProductSpecItem>
            </S.ProductSpecCol>
          </Col>
        </S.ProductSpecContainer>
      </Row>
    </main>
  );
};

export default ProductDetailPage;
