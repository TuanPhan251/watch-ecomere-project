import * as S from "./style";

const ProductSpec = ({ product }) => {
  return (
    <S.ProductSpecContainer>
      <S.ProductSpecHeading>Thông số kỹ thuật</S.ProductSpecHeading>

      <S.ProductSpecCol>
        <S.ProductSpecItem>
          <span>Giới tính:</span>
          <span>{product.data.gender === "male" ? "Nam" : "Nữ"}</span>
        </S.ProductSpecItem>
        <S.ProductSpecItem>
          <span>Kiểu máy:</span>
          <span>{product.data.movement}</span>
        </S.ProductSpecItem>
        <S.ProductSpecItem>
          <span>Chất liệu kính:</span>
          <span>{product.data.glassMaterial}</span>
        </S.ProductSpecItem>
        <S.ProductSpecItem>
          <span>Chất liệu vỏ:</span>
          <span>{product.data.caseMaterial}</span>
        </S.ProductSpecItem>
        <S.ProductSpecItem>
          <span>Chất liệu dây:</span>
          <span>{product.data.strapMaterial}</span>
        </S.ProductSpecItem>
        <S.ProductSpecItem>
          <span>Đường kính mặt</span>
          <span>{product.data.caseSize} mm</span>
        </S.ProductSpecItem>
        <S.ProductSpecItem>
          <span>Độ dày:</span>
          <span>{product.data.caseWidth} mm</span>
        </S.ProductSpecItem>
        <S.ProductSpecItem>
          <span>Độ chống nước:</span>
          <span>{product.data.waterResist}</span>
        </S.ProductSpecItem>
        <S.ProductSpecItem>
          <span>Cỡ dây:</span>
          <span>{product.data.strapSize} mm</span>
        </S.ProductSpecItem>
        <S.ProductSpecItem>
          <span>Bảo hành:</span>
          <span>{product.data.warranty} Năm</span>
        </S.ProductSpecItem>
      </S.ProductSpecCol>
    </S.ProductSpecContainer>
  );
};

export default ProductSpec;
