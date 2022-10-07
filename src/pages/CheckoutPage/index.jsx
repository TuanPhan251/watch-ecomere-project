import { useSelector } from "react-redux";

import { Button } from "antd";

import * as S from "./style";

import ScrollTopButton from "../../components/ScrollTopButton";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

const CheckoutPage = () => {
  const { cartList } = useSelector((state) => state.cart);

  const totalPrice = cartList.reduce((prev, item) => {
    return prev + item.totalPrice;
  }, 0);

  const renderCartItems = () => {
    if (cartList.length !== 0) {
      return cartList.map((item) => {
        return (
          <S.CartItem key={item.id}>
            <div className="item-img">
              <img src={item.image} alt="" />
              <div className="item-action">
                <i className="fa-solid fa-xmark"></i>
              </div>
              <h3>{item.name}</h3>
            </div>

            <div className="item-quantity">
              <button>-</button>
              <span>{item.totalAmount}</span>
              <button>+</button>
            </div>

            <div className="item-subtotal">
              <span>{(item.totalAmount * item.price).toLocaleString()}</span>
            </div>
          </S.CartItem>
        );
      });
    }
  };

  return (
    <>
      <Header />
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

        <ScrollTopButton />
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
