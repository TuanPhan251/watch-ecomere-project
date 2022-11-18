import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button, Result } from "antd";

import { ROUTES } from "../../../../constants/routes";

import * as S from "../style";

const Info = ({ setStep }) => {
  const { orderCode } = useSelector((state) => state.order);

  return (
    <S.CheckoutCartContainer>
      <h2 className="cart_summary-heading">Hoàn thành</h2>

      <Result
        status="success"
        title="Đặt hàng thành công"
        subTitle={
          <>
            <p>
              Cảm ơn bạn đã đặt hàng, chúng tôi sẽ liên hệ và giao hàng trong
              thời gian sớm nhất.
            </p>
            <p>Mã đơn hàng: {orderCode.data}</p>
          </>
        }
        extra={[
          <Button key="back">
            <Link to={ROUTES.USER.BRAND}>Về trang sản phẩm</Link>
          </Button>,
        ]}
      />
    </S.CheckoutCartContainer>
  );
};

export default Info;
