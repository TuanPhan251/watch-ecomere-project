import { useDispatch } from "react-redux";
import { generatePath, useNavigate, Link } from "react-router-dom";

import { Tooltip, notification } from "antd";

import { removeCartItemAction } from "../../../../redux/actions/cart.actions";

import emptyCartLogo from "../../../../assets/cart/empty_cart_retina.png";
import { ROUTES } from "../../../../constants/routes";
import * as S from "./style";

const CartDrawer = ({ cartList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalPrice = cartList.reduce((prev, item) => {
    return item.totalPrice + prev;
  }, 0);

  const handleRemoveProduct = (productId) => {
    dispatch(removeCartItemAction({ productId }));

    notification.warn({
      message: "Đã xóa sản phẩm vào giỏ hàng",
      placement: "top",
      top: 100,
      duration: 2,
    });
  };

  const renderCartItems = () => {
    return cartList.map((item) => {
      return (
        <S.ItemContent
          key={item.id}
          onClick={() =>
            navigate(
              generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                id: `${item.slug}.${item.id}`,
              })
            )
          }
        >
          <S.ItemImage>
            <img alt="" src={item.images} />
          </S.ItemImage>

          <S.ItemPrice>
            <h3 className="product_info-name">{item.name}</h3>

            <div className="product_price-wrapper">
              <span className="product_info-amount">
                Số lượng: {item.totalAmount}
              </span>
              <span className="product_info-price">
                {item.totalPrice.toLocaleString()} <sup>₫</sup>
              </span>
            </div>
          </S.ItemPrice>

          <S.ItemAction
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveProduct(item.id);
            }}
          >
            <Tooltip title="Xóa sản phẩm khỏi giỏ">
              <i className="fa-solid fa-trash product_btn-remove"></i>
            </Tooltip>
          </S.ItemAction>
        </S.ItemContent>
      );
    });
  };

  return (
    <S.CartItems>
      {cartList.length === 0 ? (
        <S.EmptyCartContent empty={true}>
          <div className="empty_cart-img">
            <img src={emptyCartLogo} alt="" />
          </div>

          <p
            style={{
              textAlign: "center",
              margin: "24px 0 12px",
              fontSize: 16,
            }}
          >
            Chưa có sản phẩm trong giỏ hàng
          </p>
        </S.EmptyCartContent>
      ) : (
        <>
          <S.CartItemsContent>
            <p>Giỏ hàng của bạn</p>
            {renderCartItems()}
            <p className="cart_items-totalPrice">
              Tổng: {totalPrice?.toLocaleString()}
              <sup>₫</sup>
            </p>
          </S.CartItemsContent>

          <S.CartItemsAction>
            <button>
              <Link to={ROUTES.USER.CART_SUMMARY}>Chi tiết giỏ hàng</Link>
            </button>
          </S.CartItemsAction>
        </>
      )}
    </S.CartItems>
  );
};

export default CartDrawer;
