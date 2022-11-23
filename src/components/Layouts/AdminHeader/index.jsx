import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Button, Col, Row } from "antd";

import { logoutAction } from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

import * as S from "./styles";

const AdminHeader = ({ setShowSidebar, showSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate(ROUTES.USER.HOME);
  };

  return (
    <S.AdminHeaderContainer>
      <button
        className="admin_header-sidebar-btn"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <h2 className="admin_header-heading">Trang quản trị</h2>

      <div className="admin_header-account">
        <h3>{userInfo.data.userName}</h3>
        <i className="fa-solid fa-circle-user"></i>

        <div className="account_dropdown-wrapper">
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Button block>
                <Link to={ROUTES.USER.HOME}>Về trang chủ</Link>
              </Button>
            </Col>
            <Col span={24}>
              <Button type="danger" block onClick={() => handleLogout()}>
                Đăng xuất{" "}
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </S.AdminHeaderContainer>
  );
};

export default AdminHeader;
