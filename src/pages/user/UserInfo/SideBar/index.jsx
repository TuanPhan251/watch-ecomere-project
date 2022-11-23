import { Navigate, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "antd";

import { userPageSidebar } from "../constant";
import { ROUTES } from "../../../../constants/routes";

import userImg from "../../../../assets/user/user.png";

import * as S from "./styles";

const UserSideBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const { userInfo } = useSelector((state) => state.user);

  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) return <Navigate to={ROUTES.USER.HOME} />;

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
      <div className="user__avatar">
        <Avatar src={userImg} size={64} />

        <h3>{userInfo.data.userName}</h3>
      </div>
      <ul className="user_sidebar">{renderUserSidebar()}</ul>
    </S.UserSideBar>
  );
};

export default UserSideBar;
