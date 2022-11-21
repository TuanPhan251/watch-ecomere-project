import { useEffect } from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/routes";

import * as S from "./styles";

const NotFount404 = () => {
  useEffect(() => {
    document.title = "404 Not Found";
  });

  return (
    <Result
      status="404"
      title="404"
      subTitle="Trang bạn vào có thể không tồn tại hoặc đã bị gỡ :("
      extra={
        <Button type="primary">
          <Link to={ROUTES.USER.HOME}>Quay về trang chủ</Link>
        </Button>
      }
    />
  );
};

export default NotFount404;
