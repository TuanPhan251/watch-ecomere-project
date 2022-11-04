import { useMemo } from "react";
import { generatePath, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { Modal, Col, Row, Popconfirm, Steps } from "antd";

import { ROUTES } from "../../../constants/routes";
import {
  removeCartItemAction,
  updateCartItemAction,
} from "../../../redux/actions/cart.actions";
import Cart from "../CartSummary/components/cart";
import Info from "./components/info";
import Success from "../CartSummary/components/success";
import Payment from "../CartSummary/components/payment";
import * as S from "./style";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

const CartSummaryPage = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const [step, setStep] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const totalPrice = cartList.reduce((prev, item) => {
    return prev + item.totalPrice;
  }, 0);

  const handleRemoveProduct = (productId) => {
    dispatch(removeCartItemAction({ productId }));
  };

  const renderCheckOutItem = useMemo(() => {
    switch (step) {
      case 1:
        return <Info setStep={setStep} />;
      case 2:
        return <Payment setStep={setStep} />;
      case 3:
        return <Success setStep={setStep} />;

      case 0:
      default:
        return <Cart setStep={setStep} />;
    }
  }, [step]);

  if (cartList.length === 0) {
    return (
      <S.Wrapper>
        <S.CheckoutCartContainer>
          <div className="cart-empty">
            <h2 className="cart_summary-heading">giỏ hàng</h2>

            <h3>Giỏ hàng của bạn chưa có sản phẩm nào.</h3>
          </div>
        </S.CheckoutCartContainer>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.StepContainer>
        <Steps
          current={step}
          direction="vertical"
          style={{ margin: "30px 0 0 30px" }}
        >
          <Steps.Step title="Cart" icon={<ShoppingCartOutlined />}></Steps.Step>
          <Steps.Step title="Info" icon={<UserOutlined />}></Steps.Step>
          <Steps.Step title="Payment" icon={<DollarOutlined />}></Steps.Step>
          <Steps.Step title="Success" icon={<FileDoneOutlined />}></Steps.Step>
        </Steps>
      </S.StepContainer>
      {renderCheckOutItem}
    </S.Wrapper>
  );
};

export default CartSummaryPage;
