import { Link, useLocation } from "react-router-dom";

import * as S from "./styles";

import { SidebarContent } from "./constants";

const AdminSidebar = ({ showSidebar }) => {
  const { pathname } = useLocation();

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

  return (
    <S.AdminSidebarContainer showSidebar={showSidebar}>
      {renderSidebarContent()}

      <button className="admin_header-logout-btn">
        <i className="fa-solid fa-right-from-bracket"></i>
        <span>Log out</span>
      </button>
    </S.AdminSidebarContainer>
  );
};

export default AdminSidebar;
