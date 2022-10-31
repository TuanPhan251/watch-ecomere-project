import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { Avatar, Col, Row } from "antd";
import UserSideBar from "../SideBar";
import * as S from "./styles";

const UserInfoWishListPage = () => {
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
              <h3 className="user_info-title">Sản phẩm yêu thích</h3>
            </S.UserInfo>
          </Col>
        </Row>
      </S.UserPageContent>
    </S.Wrapper>
  );
};

export default UserInfoWishListPage;
