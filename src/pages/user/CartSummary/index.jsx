import { useMemo, useEffect, useState } from "react";

import { Steps } from "antd";

import Cart from "./components/cart";
import Info from "./components/info";
import Success from "./components/success";
import Payment from "./components/payment";
import * as S from "./style";

const CartSummaryPage = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    document.title = "Giỏ hàng";
  }, []);

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

  return (
    <S.Wrapper>
      <S.StepContainer>
        <Steps current={step}>
          <Steps.Step
            title="Giỏ hàng"
            icon={<i className="fa-solid fa-cart-shopping"></i>}
          ></Steps.Step>
          <Steps.Step
            title="Thông tin"
            icon={<i className="fa-regular fa-user"></i>}
          ></Steps.Step>
          <Steps.Step
            title="Thanh toán"
            icon={<i className="fa-solid fa-dollar-sign"></i>}
          ></Steps.Step>
          <Steps.Step
            title="Hoàn thành"
            icon={<i className="fa-regular fa-circle-check"></i>}
          ></Steps.Step>
        </Steps>
      </S.StepContainer>

      {renderCheckOutItem}
    </S.Wrapper>
  );
};

export default CartSummaryPage;
