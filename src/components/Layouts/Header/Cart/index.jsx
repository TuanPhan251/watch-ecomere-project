import { useDispatch } from "react-redux";

import { removeProductAction } from "../../../../redux/actions/cart.actions";

import * as S from "./style";
import emptyCartLogo from "../../../../assets/cart/empty_cart_retina.png";

const CartDrawer = ({ cartList }) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = (data, id) => {
    dispatch(removeProductAction({ data, id }));
  };

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

          <S.ItemAction onClick={() => handleRemoveProduct(item, "remove")}>
            <i className="fa-solid fa-xmark"></i>
          </S.ItemAction>
        </S.ItemContent>
      );
    });
  };

  return (
    <S.CartItems>
      {cartList.length === 0 ? (
        <S.CartItemsContent>
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
        </S.CartItemsContent>
      ) : (
        <>
          <S.CartItemsContent>
            <p>Giỏ hàng của bạn</p>
            {renderCartItems()}
          </S.CartItemsContent>

          <S.CartItemsAction>
            <button>Chi tiết giỏ hàng</button>
          </S.CartItemsAction>
        </>
      )}
    </S.CartItems>
  );
};

export default CartDrawer;
