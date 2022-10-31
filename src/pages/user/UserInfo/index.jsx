import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Col, Row } from "antd";

import UserSideBar from "./SideBar";
import * as S from "./styles";

const UserInfoPage = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <S.Wrapper>
      <S.TopSpacer></S.TopSpacer>
      <S.UserPageContent>
        <Row gutter={16}>
          <Col span={6}>
            <UserSideBar />
          </Col>
          <Col span={18}>
            <S.UserInfo>
              <h3 className="user_info-title">Thông tin tài khoản</h3>

              <div className="user_info-summary">
                <p className="user_info-name">
                  Tên người dùng: <span>{userInfo.data?.userName}</span>
                </p>
                <p className="user_info-email">
                  Email: <span>{userInfo.data?.email}</span>
                </p>
              </div>
            </S.UserInfo>
          </Col>
        </Row>
      </S.UserPageContent>
    </S.Wrapper>
  );
};

export default UserInfoPage;
