import * as S from "../style";
import imageForm from "../../../../assets/banner/image-form-info.png";
import { Form, useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import { ROUTES } from "../../../../constants/routes";
import { STEP } from "../components/constants/step";

const Info = ({ setStep }) => {
  const navigate = useNavigate();

  return (
    <S.CheckoutCartContainer>
      <h2 className="cart_summary-heading">Thanh toán thành công</h2>

      <Button
        size="large"
        style={{ backgroundColor: "yellow", minWidth: 200 }}
        onClick={() => navigate(ROUTES.USER.HOME)}
      >
        Quay về trang chủ
      </Button>
    </S.CheckoutCartContainer>
  );
};

export default Info;
