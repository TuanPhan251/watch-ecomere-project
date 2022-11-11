import { Avatar, Col, Row } from "antd";
import { Link, useLocation } from "react-router-dom";

import BreadCrumb from "../../../../components/BreadCrumb";
import UserSideBar from "../SideBar";
import { ROUTES } from "../../../../constants/routes";

import * as S from "./styles";

const UserInfoPasswordPage = () => {
  return (
    <S.Wrapper>
      <S.TopSpacer></S.TopSpacer>

      <S.BreadCrumbWrapper>
        <BreadCrumb
          breadCrumbItems={[
            {
              title: "Trang chủ",
              path: ROUTES.USER.HOME,
            },
            {
              title: "Đổi mật khẩu",
              path: "",
            },
          ]}
        />
      </S.BreadCrumbWrapper>

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
