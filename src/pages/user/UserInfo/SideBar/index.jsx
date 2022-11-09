import { Avatar, Col, Row } from "antd";
import { Link, useLocation } from "react-router-dom";

import { userPageSidebar } from "../constant";
import * as S from "./styles";

const UserSideBar = () => {
  const location = useLocation();
  const { pathname } = location;

  const renderUserSidebar = () => {
    return userPageSidebar.map((item, index) => {
      return (
        <Link className="user_sidebar-item-link" to={item.path} key={index}>
          <S.UserSidebarItem
            className="user_sidebar-item"
            $active={pathname === item.path}
          >
            {item.icon}
            {item.title}
          </S.UserSidebarItem>
        </Link>
      );
    });
  };

  return (
    <S.UserSideBar>
      <Avatar size={64} src="https://joeschmoe.io/api/v1/random" />
      <ul className="user_sidebar">{renderUserSidebar()}</ul>
    </S.UserSideBar>
  );
};

export default UserSideBar;
