import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./styles";

import { SidebarContent } from "./constants";
import { ROUTES } from "../../../constants/routes";

const AdminSidebar = ({ showSidebar }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const renderSidebarContent = () => {
    return SidebarContent.map((item, index) => {
      return (
        <S.SidebarLink
          key={index}
          to={item.path}
          $active={pathname === item.path}
        >
          {item.icon}
          <span>{item.title}</span>
        </S.SidebarLink>
      );
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate(ROUTES.LOGIN);
  };

  return (
    <S.AdminSidebarContainer showSidebar={showSidebar}>
      {renderSidebarContent()}

      <button
        className="admin_header-logout-btn"
        onClick={() => handleLogout()}
      >
        <i className="fa-solid fa-right-from-bracket"></i>
        Log out
        {/* <Link to="/">Log out</Link> */}
      </button>
    </S.AdminSidebarContainer>
  );
};

export default AdminSidebar;
