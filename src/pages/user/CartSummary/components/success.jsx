import * as S from "../style";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ROUTES } from "../../../../constants/routes";

const Info = ({ setStep }) => {
  const navigate = useNavigate();

  return (
    <S.CheckoutCartContainer>
      <h2 className="cart_summary-heading">Thanh toán thành công</h2>

      <Button
        size="large"
        style={{ backgroundColor: "yellow", minWidth: 200 }}
        onClick={() => navigate(ROUTES.USER.BRAND)}
      >
        Tiếp tục mua sắm
      </Button>
    </S.CheckoutCartContainer>
  );
};

export default Info;
