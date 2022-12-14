import * as S from "./styles";

const ProductGift = ({ discount }) => {
  return (
    <S.ProductGiftWrapper>
      <h3 className="product_gift-heading">Khuyến mãi</h3>
      <ul className="product_gift-list">
        {!!discount && (
          <li className="product_gift-item">
            <i className="fa-solid fa-gift"></i>
            <span>Giảm trực tiếp {discount}% vào giá bán</span>
          </li>
        )}
        <li className="product_gift-item">
          <i className="fa-solid fa-gift"></i>
          <span>Dịch vụ gói quà miễn phí khi mua tại cửa hàng.</span>
        </li>
        <li className="product_gift-item">
          <i className="fa-solid fa-gift"></i>
          <span>Miễn phí thay pin trọn đời sản phẩm.</span>
        </li>
        <li className="product_gift-item">
          <i className="fa-solid fa-gift"></i>
          <span>Voucher giảm giá khi mua lại sản phẩm tại cửa hàng.</span>
        </li>
      </ul>
    </S.ProductGiftWrapper>
  );
};

export default ProductGift;
