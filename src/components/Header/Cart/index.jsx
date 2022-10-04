import * as S from "./style";
import emptyCartLogo from "../../../assets/cart/empty_cart_retina.png";

const CartDrawer = ({ cartList }) => {
  console.log(cartList);
  const renderCartItems = () => {
    return cartList.map((item) => {
      return (
        <S.ItemContent key={item.id}>
          <S.ItemImage>
            <img alt="" src={item.image} />
            <span>x{item.totalAmount}</span>
          </S.ItemImage>

          <S.ItemPrice>
            <h3>{item.name}</h3>
            <span>{item.totalPrice.toLocaleString()}VND</span>
          </S.ItemPrice>

          <S.ItemAction>
            <i className="fa-solid fa-xmark"></i>
          </S.ItemAction>
        </S.ItemContent>
      );
    });
  };

  return (
    <S.CartItems>
      <S.CartItemsContent>
        {cartList.length === 0 ? (
          <>
            <img
              src={emptyCartLogo}
              alt=""
              style={{
                width: "100%",
                borderRadius: "2px",
              }}
            />
            <p
              style={{
                textAlign: "center",
                margin: "24px 0 12px",
              }}
            >
              Chưa có sản phẩm trong giỏ hàng
            </p>
          </>
        ) : (
          <>
            <p>Giỏ hàng của bạn</p>
            {renderCartItems()}
          </>
        )}
      </S.CartItemsContent>
      <S.CartItemsAction>
        <button>Chi tiết giỏ hàng</button>
      </S.CartItemsAction>
    </S.CartItems>
  );
};

export default CartDrawer;
