import { useRef } from "react";
import { generatePath, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Button, Col, Row } from "antd";

import { ROUTES } from "../../../constants/routes";
import {
  removeCartItemAction,
  updateCartItemAction,
} from "../../../redux/actions/cart.actions";

import * as S from "./style";

const CartSummaryPage = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);

  const totalPrice = cartList.reduce((prev, item) => {
    return prev + item.totalPrice;
  }, 0);

  const handleRemoveProduct = (product) => {
    dispatch(removeCartItemAction({ product }));
  };

  const handleUpdateCartItem = (product, quantity, type) => {
    dispatch(
      updateCartItemAction({
        product,
        amount: type === "plus" ? quantity + 1 : quantity - 1,
      })
    );
  };

  const renderCartItems = () => {
    if (cartList.length !== 0) {
      return cartList.map((item) => {
        return (
          <S.CartItem key={item.id}>
            <Col span={4}>
              <div className="item-img">
                <img src={item.image} alt="" />
              </div>
            </Col>
            <Col span={12}>
              <div className="item-action">
                <Link
                  className="item_name"
                  to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                    id: `${item.slug}.${item.id}`,
                  })}
                >
                  {item.name}
                </Link>
                <button onClick={() => handleRemoveProduct(item, "remove")}>
                  <i className="fa-solid fa-trash"></i>
                  <span>Xóa khỏi giỏ</span>
                </button>
              </div>
            </Col>

            <Col span={8}>
              <div className="item_info-right-wrapper">
                <div className="item-quantity">
                  <p>Số lượng: </p>
                  <button
                    onClick={() =>
                      handleUpdateCartItem(item, item.totalAmount, "minus")
                    }
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <input
                    min={1}
                    readOnly
                    type="text"
                    value={item.totalAmount}
                    onChange={(e) => {
                      if (e.target.value < 1) return handleRemoveProduct;
                    }}
                  />
                  <button
                    onClick={() =>
                      handleUpdateCartItem(item, item.totalAmount, "plus")
                    }
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>

                <div className="item_price">
                  <span className="item_price-original">
                    {(item.totalAmount * item.price)?.toLocaleString()}
                    <sup>đ</sup>
                  </span>
                  <span className="item_price-final">
                    {item.totalPrice?.toLocaleString()}
                    <sup>đ</sup>
                  </span>
                  <p className="item_price-discount">
                    Tiết kiệm <span>{item.discountPercent}%</span>
                  </p>
                </div>
              </div>
            </Col>
          </S.CartItem>
        );
      });
    }
  };

  if (cartList.length === 0) {
    return (
      <S.Wrapper>
        <S.CheckoutCartContainer>
          <div className="cart-empty">
            <h2 className="checkout-heading">giỏ hàng</h2>

            <h3>Giỏ hàng của bạn chưa có sản phẩm nào.</h3>
          </div>
        </S.CheckoutCartContainer>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.CheckoutCartContainer>
        <h2 className="checkout-heading">giỏ hàng</h2>

        <div className="cart-item-container">
          <Col span={16}>
            <div className="cart-item-wrapper">
              <div className="cart-item-tbody">{renderCartItems()}</div>
            </div>
          </Col>

          <Col span={8}>
            <div className="cart_summary">
              <h3>Đơn hàng của bạn:</h3>
              <p className="cart_total-price">
                <span className="cart_total-price-title">Tạm tính:</span>
                <span>
                  {totalPrice?.toLocaleString()} <sup>đ</sup>
                </span>
              </p>
              <p className="cart_shipping-cost">
                <span className="cart_shipping-cost-title">
                  Phí vận chuyển:
                </span>
                <span>Miễn phí</span>
              </p>

              <div className="cart_price-total">
                <p className="cart_price-total-title">
                  Tổng cộng (đã bao gồm VAT)
                </p>
                <p className="cart_price-total-amount">
                  {totalPrice?.toLocaleString()} <sup>đ</sup>
                </p>
              </div>

              <div className="cart_summary-action">
                <button>ĐẶT HÀNG NGAY</button>
              </div>
            </div>
          </Col>
        </div>
      </S.CheckoutCartContainer>
    </S.Wrapper>
  );
};

export default CartSummaryPage;
