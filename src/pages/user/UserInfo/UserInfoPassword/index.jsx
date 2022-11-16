import { useEffect } from "react";
import { Avatar, Col, Row } from "antd";
import { Link, useLocation } from "react-router-dom";

import Layout from "../Layout";

import { ROUTES } from "../../../../constants/routes";

import * as S from "./styles";

const UserInfoPasswordPage = () => {
  useEffect(() => {
    document.title = "Đổi mật khẩu";
  }, []);

  return (
    <Layout>
      <Col span={18}>content</Col>
    </Layout>
  );
};

export default UserInfoPasswordPage;
