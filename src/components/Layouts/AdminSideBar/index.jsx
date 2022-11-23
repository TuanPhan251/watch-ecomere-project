import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import * as S from "./styles";

import { SidebarContent } from "./constants";

const AdminSidebar = ({ showSidebar }) => {
  const { pathname } = useLocation();

  const renderSidebarContent = useMemo(() => {
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
  }, [SidebarContent, pathname]);

  return (
    <S.AdminSidebarContainer showSidebar={showSidebar}>
      {renderSidebarContent}
    </S.AdminSidebarContainer>
  );
};

export default AdminSidebar;
