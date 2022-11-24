import { useMemo } from "react";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Col, Row, Popconfirm, Button, Form, Input, notification } from "antd";

import emptyCartImg from "../../../../assets/cart/empty_cart_retina.png";

import { ROUTES } from "../../../../constants/routes";
import { STEP } from "./constants/step";
import {
  removeCartItemAction,
  updateCartItemAction,
} from "../../../../redux/actions/cart.actions";
import {
  getDiscountAction,
  setCouponInfoAction,
} from "../../../../redux/actions/";

import * as S from "../style";

const Cart = ({ setStep }) => {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const [inputForm] = Form.useForm();

  const { cartList } = useSelector((state) => state.cart);
  const { discount } = useSelector((state) => state.discount);
  const haveCoupon = !(discount.data.length === 0);

  const navigate = useNavigate();

  const totalPrice = cartList.reduce((prev, item) => {
    return prev + item.totalPrice;
  }, 0);

  const discountPrice = totalPrice * (1 - discount.data[0]?.discount / 100);

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
  const handleApplyCoupon = (value) => {
    dispatch(
      getDiscountAction({
        data: value.discountInput,
        callback: {
          successApply: () => {
            notification.success({
              message: "Thành công",
              description: "Đã áp dụng mã giảm giá",
              top: 100,
            });
          },
          errorApply: () => {
            notification.error({
              message: "Thất bại",
              description: "Mã giảm giá không tồn tại.",
              top: 100,
            });
            inputForm.setFields([
              {
                name: "discountInput",
                errors: ["Mã không tồn tại"],
              },
            ]);
          },
        },
      })
    );
  };

  const handleSubmitCartForm = () => {
    if (!accessToken)
      return notification.warn({
        message: "Bạn cần đăng nhập để tiếp tục",
        duration: 2,
        top: 50,
      });
    if (haveCoupon)
      dispatch(
        setCouponInfoAction({
          data: {
            ...discount.data[0],
            discountPrice: discountPrice,
          },
        })
      );
    setStep(STEP.INFO);
  };

  const renderCartItems = useMemo(() => {
    if (cartList.length !== 0) {
      return cartList.map((item) => {
        const currentCartItem = cartList.find(
          (cartItem) => cartItem.id === item.id
        );

        return (
          <S.CartItem key={item.id}>
            <Col span={4}>
              <div className="item-img">
                <img src={item.images} alt="" />
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

                <p>Còn lại {item.stock} sản phẩm.</p>

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
                <div className="item_price">
                  {item.isDiscount && (
                    <span className="item_price-original">
                      {(item.totalAmount * item.price)?.toLocaleString()}
                      <sup>đ</sup>
                    </span>
                  )}
                  <span className="item_price-final">
                    {item.totalPrice?.toLocaleString()}
                    <sup>đ</sup>
                  </span>
                  {item.isDiscount && (
                    <p className="item_price-discount">
                      Tiết kiệm <span>{item.discountPercent}%</span>
                    </p>
                  )}
                </div>

                <div className="item-quantity">
                  <button
                    onClick={() => {
                      if (item.totalAmount === 1) return null;
                      handleUpdateCartItem(item, item.totalAmount, "minus");
                    }}
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
                    onClick={() => {
                      if (item.stock <= currentCartItem?.totalAmount) {
                        return notification.warn({
                          message: "Sản phẩm đã tới giới hạn tồn kho.",
                          top: 100,
                          placement: "top",
                          duration: 2,
                        });
                      }
                      handleUpdateCartItem(item, item.totalAmount, "plus");
                    }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </Col>
          </S.CartItem>
        );
      });
    }
  }, [cartList]);

  if (cartList.length === 0) {
    return (
      <S.CheckoutCartContainer>
        <div className="cart-empty">
          <h2 className="cart_summary-heading">giỏ hàng</h2>

          <h3>Giỏ hàng của bạn chưa có sản phẩm nào.</h3>

          <div>
            <img src={emptyCartImg} alt="" />
          </div>

          <Link to={ROUTES.USER.BRAND}>Về trang sản phẩm</Link>
        </div>
      </S.CheckoutCartContainer>
    );
  }

  return (
    <S.CheckoutCartContainer>
      <h2 className="cart_summary-heading">giỏ hàng</h2>

      <Row gutter={8}>
        <Col xxl={16} xl={16} lg={16} md={24} xs={24}>
          <div className="cart-item-wrapper">
            <div className="cart-item-tbody">{renderCartItems}</div>
          </div>
        </Col>

        <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
          <div className="cart_summary">
            <h3>Đơn hàng của bạn:</h3>
            <div className="cart_summary-discount">
              <Form
                form={inputForm}
                onFinish={(value) => handleApplyCoupon(value)}
              >
                <Form.Item
                  label="Nhập mã giảm giá"
                  name="discountInput"
                  rules={[
                    {
                      required: true,
                      message: "Bạn chưa nhập mã",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Button
                  htmlType="submit"
                  block
                  // onClick={handleApplyCoupon}
                >
                  Sử dụng
                </Button>
              </Form>
            </div>
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
            {haveCoupon && (
              <p className="cart_shipping-cost">
                <span className="cart_shipping-cost-title">Giảm giá:</span>

                <span>{discount.data[0]?.discount}%</span>
              </p>
            )}

            <div className="cart_price-total">
              <p className="cart_price-total-title">Tổng cộng</p>
              <p className="cart_price-total-amount">
                {haveCoupon
                  ? discountPrice?.toLocaleString()
                  : totalPrice?.toLocaleString()}{" "}
                <sup>đ</sup>
              </p>
            </div>

            <div className="cart_summary-action">
              <button onClick={() => handleSubmitCartForm()}>
                ĐẶT HÀNG NGAY
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ justifyContent: "space-between", marginTop: 30 }}>
        <Button
          size="large"
          type="primary"
          ghost
          onClick={() => navigate(ROUTES.USER.BRAND)}
        >
          Quay lại trang sản phẩm
        </Button>
      </Row>
    </S.CheckoutCartContainer>
  );
};

export default Cart;
