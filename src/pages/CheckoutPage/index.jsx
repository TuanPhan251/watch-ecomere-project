import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "antd";

import { ROUTES } from "../../constants/routes";
import {
  addProductAction,
  removeProductAction,
} from "../../redux/actions/cart.actions";

import * as S from "./style";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);

  const totalPrice = cartList.reduce((prev, item) => {
    return prev + item.totalPrice;
  }, 0);

  const handleAddProduct = (data) => {
    dispatch(addProductAction({ data }));
  };

  const handleRemoveProduct = (data, type) => {
    dispatch(removeProductAction({ data, type }));
  };

  const renderCartItems = () => {
    if (cartList.length !== 0) {
      return cartList.map((item) => {
        return (
          <S.CartItem key={item.id}>
            <div className="item-img">
              <img src={item.image} alt="" />
              <div
                className="item-action"
                onClick={() => handleRemoveProduct(item, "remove")}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
              <h3>{item.name}</h3>
            </div>

            <div className="item-quantity">
              <button onClick={() => handleRemoveProduct(item, "decrease")}>
                -
              </button>
              <span>{item.totalAmount}</span>
              <button onClick={() => handleAddProduct(item)}>+</button>
            </div>

            <div className="item-subtotal">
              <span>{(item.totalAmount * item.price).toLocaleString()}</span>
            </div>
          </S.CartItem>
        );
      });
    }
  };

  if (cartList.length === 0) {
    return (
      <main>
        <S.CheckoutCartContainer>
          <div className="cart-empty">
            <h2 className="checkout-heading">giỏ hàng</h2>

            <h3>Giỏ hàng của bàn chưa có sản phẩm nào.</h3>

            <Link to={ROUTES.USER.MEN_DETAIL}>Về trang sản phẩm.</Link>
          </div>
        </S.CheckoutCartContainer>
      </main>
    );
  }

  return (
    <main>
      <S.CheckoutCartContainer>
        <h2 className="checkout-heading">giỏ hàng</h2>

        <div className="cart-item-container">
          <div className="cart-item-wrapper">
            <div className="cart-item-thead">
              <span>Sản phẩm</span>
              <span>Số lượng</span>
              <span>Thành tiền</span>
            </div>
            <div className="cart-item-tbody">{renderCartItems()}</div>
          </div>

          <div className="cart-actions">
            <p className="cart-total-price">
              Tổng: <span>{totalPrice.toLocaleString()} VNĐ</span>
            </p>
            <Button>ĐẶT HÀNG NGAY</Button>
          </div>
        </div>
      </S.CheckoutCartContainer>
    </main>
  );
};

export default CheckoutPage;
