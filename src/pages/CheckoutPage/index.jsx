import { useSelector } from "react-redux";

import * as S from "./style";

import ScrollTopButton from "../../components/ScrollTopButton";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

const CheckoutPage = () => {
  const cartList = useSelector((state) => state.cart);

  const renderCartItems = () => {
    if (cartList.length !== 0) {
      return cartList.map((item) => {
        return <></>;
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        <S.CheckoutCartContainer>
          <S.CheckoutHeading>giỏ hàng</S.CheckoutHeading>

          <S.CartItemsContainer>
            <S.CartItemsWrapper>
              <S.CartItemsTHead>
                <span>Sản phẩm</span>
                <span>Số lượng</span>
                <span>Thành tiền</span>
              </S.CartItemsTHead>
            </S.CartItemsWrapper>

            <S.CartItemsActions></S.CartItemsActions>
          </S.CartItemsContainer>
        </S.CheckoutCartContainer>

        <ScrollTopButton />
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
