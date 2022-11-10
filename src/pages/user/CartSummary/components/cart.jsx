import { useMemo, useEffect } from "react";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Col, Row, Popconfirm, Button, Form, Input, notification } from "antd";

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
import { useState } from "react";

const Cart = ({ setStep }) => {
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
  const [discountValue, setDiscountValue] = useState(0);

  const [totalDiscountPrice, setTotalDiscountPrice] = useState(totalPrice);

  // useEffect(() => {
  //   if (!haveCoupon) {
  //     inputForm.setFields([
  //       {
  //         name: "discountInput",
  //         errors: ["Mã không có hiệu lực"],
  //       },
  //     ]);
  //   }
  // }, [discount.data]);

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
                    onClick={() =>
                      handleUpdateCartItem(item, item.totalAmount, "plus")
                    }
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
                  // onClick={handleApplyCoupon}
                  style={{ width: "100%" }}
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
      </div>
      <Row style={{ justifyContent: "space-between", marginTop: 30 }}>
        <Button
          size="large"
          style={{ backgroundColor: "yellow", minWidth: 200 }}
          onClick={() => navigate(ROUTES.USER.BRAND)}
        >
          Quay lại trang sản phẩm
        </Button>
      </Row>
    </S.CheckoutCartContainer>
  );
};

export default Cart;
