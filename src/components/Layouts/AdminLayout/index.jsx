import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSideBar";
import { ROUTES } from "../../../constants/routes";
import * as S from "./styles";
import { Spin } from "antd";

const AdminLayout = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [showSidebar, setShowSidebar] = useState(true);
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken && userInfo.loading) {
    return (
      <Spin spinning={true}>
        <S.LoadingWrapper></S.LoadingWrapper>
      </Spin>
    );
  } else if (
    !accessToken ||
    (!userInfo.loading && userInfo.data.id && userInfo.data.role !== "admin")
  )
    return <Navigate to={ROUTES.USER.HOME} />;
  return (
    <S.Wrapper>
      <AdminHeader setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <S.AdminMainContainer>
        <AdminSidebar showSidebar={showSidebar} />

        <S.MainContent showSidebar={showSidebar}>
          <Outlet />
        </S.MainContent>
      </S.AdminMainContainer>
    </S.Wrapper>
  );
};

export default AdminLayout;
