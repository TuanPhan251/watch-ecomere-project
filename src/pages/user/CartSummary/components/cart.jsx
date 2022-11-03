import { useMemo } from "react";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Modal, Col, Row, Popconfirm, Button } from "antd";

import { ROUTES } from "../../../../constants/routes";
import { STEP } from "../components/constants/step";
import {
  removeCartItemAction,
  updateCartItemAction,
} from "../../../../redux/actions/cart.actions";

import * as S from "../style";
import { useState } from "react";

const Cart = ({ setStep }) => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const totalPrice = cartList.reduce((prev, item) => {
    return prev + item.totalPrice;
  }, 0);

  const handleRemoveProduct = (productId) => {
    dispatch(removeCartItemAction({ productId }));
  };

  const handleUpdateCartItem = (product, quantity, type) => {
    dispatch(
      updateCartItemAction({
        product,
        amount: type === "plus" ? quantity + 1 : quantity - 1,
      })
    );
  };

  const renderCartItems = useMemo(() => {
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

                <Popconfirm
                  title="Xóa sản phẩm khỏi giỏ?"
                  okText="Ok"
                  cancelText="Hủy"
                  onConfirm={() => handleRemoveProduct(item.id)}
                >
                  <button onClick={() => null}>
                    <i className="fa-regular fa-trash-can"></i>
                    <span>Xóa khỏi giỏ</span>
                  </button>
                </Popconfirm>
              </div>
            </Col>

            <Col span={8}>
              <div className="item_info-right-wrapper">
                <div className="item-quantity">
                  <p>Số lượng: </p>
                  <Popconfirm
                    title="Xóa sản phẩm khỏi giỏ?"
                    okText="Ok"
                    cancelText="Hủy"
                    onConfirm={() => handleRemoveProduct(item.id)}
                  >
                    <button
                      onClick={() => {
                        if (item.totalAmount === 1) return null;
                        handleUpdateCartItem(item, item.totalAmount, "minus");
                      }}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                  </Popconfirm>

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
  }, [cartList]);

  return (
    <S.CheckoutCartContainer>
      <h2 className="cart_summary-heading">giỏ hàng</h2>

      <div className="cart-item-container">
        <Col xxl={16} xl={16} lg={16} md={24} xs={24}>
          <div className="cart-item-wrapper">
            <div className="cart-item-tbody">{renderCartItems}</div>
          </div>
        </Col>

        <Col xxl={8} xl={8} lg={8} md={24} xs={24}>
          <div className="cart_summary">
            <h3>Đơn hàng của bạn:</h3>
            <p className="cart_total-price">
              <span className="cart_total-price-title">Tạm tính:</span>
              <span>
                {totalPrice?.toLocaleString()} <sup>đ</sup>
              </span>
            </p>
            <p className="cart_shipping-cost">
              <span className="cart_shipping-cost-title">Phí vận chuyển:</span>
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
      <Row style={{ justifyContent: "space-between", marginTop: 30 }}>
        <Button
          size="large"
          style={{ backgroundColor: "yellow", minWidth: 200 }}
          onClick={() => navigate(ROUTES.USER.PRODUCT_DETAIL)}
        >
          Quay về trang sản phẩm
        </Button>
        <Button
          size="large"
          style={{ backgroundColor: "yellow", minWidth: 200 }}
          onClick={() => setStep(STEP.INFO)}
        >
          Next
        </Button>
      </Row>
    </S.CheckoutCartContainer>
  );
};

export default Cart;
