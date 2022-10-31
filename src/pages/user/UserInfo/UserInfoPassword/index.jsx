import { Avatar, Col, Row } from "antd";
import { Link, useLocation } from "react-router-dom";

import UserSideBar from "../SideBar";
import * as S from "./styles";

const UserInfoPasswordPage = () => {
  return (
    <S.Wrapper>
      <S.TopSpacer></S.TopSpacer>
      <S.UserPageContent>
        <Row gutter={16}>
          <Col span={6}>
            <UserSideBar />
          </Col>
          <Col span={18}>content</Col>
        </Row>
      </S.UserPageContent>
    </S.Wrapper>
  );
};

export default UserInfoPasswordPage;
