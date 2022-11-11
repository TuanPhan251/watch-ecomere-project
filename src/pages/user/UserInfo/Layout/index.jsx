import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Col, Row } from "antd";

import BreadCrumb from "../../../../components/BreadCrumb";
import UserSideBar from "../SideBar";

import { ROUTES } from "../../../../constants/routes";

import * as S from "./styles";

const UserInfoPage = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { pathname } = useLocation();

  const handleChangeBreadCrumb = () => {
    switch (pathname) {
      case `${ROUTES.USER.USER_INFO_ORDER}`: {
        return [
          {
            title: "Trang chủ",
            path: ROUTES.USER.HOME,
          },
          {
            title: "Lịch sử đặt hàng",
            path: "",
          },
        ];
      }
      case ROUTES.USER.USER_INFO_WISHLIST: {
        return [
          {
            title: "Trang chủ",
            path: ROUTES.USER.HOME,
          },
          {
            title: "Danh sách yêu thích",
            path: "",
          },
        ];
      }
      case ROUTES.USER.USER_INFO_PASSWORD: {
        return [
          {
            title: "Trang chủ",
            path: ROUTES.USER.HOME,
          },
          {
            title: "Đổi mật khẩu",
            path: "",
          },
        ];
      }
      default:
        return [
          {
            title: "Trang chủ",
            path: ROUTES.USER.HOME,
          },
          {
            title: "Thông tin tài khoản",
            path: "",
          },
        ];
    }
  };

  return (
    <S.Wrapper>
      <S.TopSpacer></S.TopSpacer>

      <S.BreadCrumbWrapper>
        <BreadCrumb breadCrumbItems={handleChangeBreadCrumb()} />
      </S.BreadCrumbWrapper>

      <S.UserPageContent>
        <Row gutter={16}>
          <Col span={6}>
            <UserSideBar />
          </Col>
          <Col span={18}>
            <S.UserInfo>
              <Outlet />
            </S.UserInfo>
          </Col>
        </Row>
      </S.UserPageContent>
    </S.Wrapper>
  );
};

export default UserInfoPage;
