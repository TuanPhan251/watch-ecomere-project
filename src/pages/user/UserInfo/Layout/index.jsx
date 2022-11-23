import { useLocation } from "react-router-dom";
import { Col, Row } from "antd";

import BreadCrumb from "../../../../components/BreadCrumb";
import UserSideBar from "../SideBar";

import { ROUTES } from "../../../../constants/routes";

import * as S from "./styles";

const UserInfoPage = (props) => {
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
          <Col xxl={6} lg={6} md={24} sm={24} xs={24}>
            <UserSideBar />
          </Col>
          <Col xxl={18} lg={16} md={24} sm={24} xs={24}>
            <S.UserInfo>{props.children}</S.UserInfo>
          </Col>
        </Row>
      </S.UserPageContent>
    </S.Wrapper>
  );
};

export default UserInfoPage;
