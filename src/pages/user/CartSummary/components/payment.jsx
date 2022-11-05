import * as S from "../style";
import { generatePath, Link } from "react-router-dom";
import { Button, Col, Popconfirm, Radio, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

import { ROUTES } from "../../../../constants/routes";
import { STEP } from "./constants/step";
import {
  removeCartItemAction,
  updateCartItemAction,
} from "../../../../redux/actions/cart.actions";

const Payment = ({ setStep }) => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
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
      <h2 className="cart_summary-heading">Thanh toán</h2>
      <div>
        <h3>Chọn phương thức thanh toán</h3>

        <div>
          <Radio.Group
            style={{ display: "flex", flexDirection: "column", rowGap: 20 }}
          >
            <Radio name="payment" value="card">
              Thanh toán bằng thẻ
            </Radio>
            <Radio name="payment" value="money">
              Thanh toán bằng tiền mặt
            </Radio>
          </Radio.Group>
        </div>
      </div>

      <div>
        <h3>Xem lại đơn hàng của bạn</h3>
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
                <span className="cart_shipping-cost-title">
                  Phí vận chuyển:
                </span>
                <span>Miễn phí</span>
              </p>

              <div className="cart_price-total">
                <p className="cart_price-total-title">
                  Tổng cộng (bao gồm VAT)
                </p>
                <p className="cart_price-total-amount">
                  {totalPrice?.toLocaleString()} <sup>đ</sup>
                </p>
              </div>

              <div className="cart_summary-action">
                <button onClick={() => setStep(STEP.SUCCESS)}>
                  Thanh toán
                </button>
              </div>
            </div>
          </Col>
        </div>
      </div>

      <Row justify="space-between">
        <Button
          size="large"
          style={{ backgroundColor: "yellow", minWidth: 200 }}
          onClick={() => setStep(STEP.INFO)}
        >
          Quay lại
        </Button>
      </Row>
    </S.CheckoutCartContainer>
  );
};

export default Payment;
