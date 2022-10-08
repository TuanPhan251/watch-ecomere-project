import { Outlet } from "react-router-dom";
import { useState } from "react";

import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSideBar";

import * as S from "./styles";

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <AdminHeader setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <S.AdminMainContainer>
        <AdminSidebar showSidebar={showSidebar} />
        <Outlet />
      </S.AdminMainContainer>
    </>
  );
};

export default AdminLayout;
