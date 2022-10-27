import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSideBar";
import { ROUTES } from "../../../constants/routes";
import * as S from "./styles";
import LoadingPage from "../Loading";

const AdminLayout = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [showSidebar, setShowSidebar] = useState(true);
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken && userInfo.loading) {
    return <LoadingPage />;
  } else if (
    !accessToken ||
    (!userInfo.loading && userInfo.data.role !== "admin")
  )
    return <Navigate to={ROUTES.USER.HOME} />;
  return (
    <>
      <AdminHeader setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <S.AdminMainContainer>
        <AdminSidebar showSidebar={showSidebar} />

        <S.MainContent showSidebar={showSidebar}>
          <Outlet />
        </S.MainContent>
      </S.AdminMainContainer>
    </>
  );
};

export default AdminLayout;
