import { Link } from "react-router-dom";
import * as S from "./styles";

const ProductPolicy = () => {
  return (
    <S.PolicyWrapper>
      <ul className="product_policy-list">
        <li className="product_policy-item">
          <i className="fa-solid fa-truck-fast"></i>
          <span>Miễn phí vận chuyển trên toàn quốc.</span>
        </li>
        <li className="product_policy-item">
          <i className="fa-solid fa-shield"></i>
          <span>Bảo hành chính hãng tại trung tâm ủy quyền.</span>
        </li>
        <li className="product_policy-item">
          <i className="fa-solid fa-arrows-rotate"></i>
          <span>Đổi trả miễn phí trong 30 ngày khi có lỗi nhà sản xuất.</span>
        </li>
      </ul>

      <ul className="customer_support-list">
        <h3>Trợ giúp</h3>
        <li className="customer_support-item">
          <Link>Chính sách bảo hành</Link>
        </li>
        <li className="customer_support-item">
          <Link>Chính sách vận chuyển</Link>
        </li>
        <li className="customer_support-item">
          <Link>Chính sách đổi trả sản phẩm</Link>
        </li>
      </ul>

      <ul className="customer_support-number">
        <h3>Tư vấn - Đặt hàng</h3>
        <li className="customer_support-item">
          <Link>Gọi mua hàng: (0236) xxxx.xxx</Link>
        </li>
        <li className="customer_support-item">
          <Link>Gọi bảo hành : (0236) xxxx.xxx</Link>
        </li>
        <li className="customer_support-item">
          <Link>Gọi kỹ thuật: (0236) xxxx.xxx</Link>
        </li>
      </ul>
    </S.PolicyWrapper>
  );
};

export default ProductPolicy;
