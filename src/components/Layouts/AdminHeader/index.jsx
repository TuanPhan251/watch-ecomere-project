import { useSelector } from "react-redux";

import * as S from "./styles";

const AdminHeader = ({ setShowSidebar, showSidebar }) => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <S.AdminHeaderContainer>
      <button
        className="admin_header-sidebar-btn"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <h2 className="admin_header-heading">Trang quản trị</h2>

      <h3 className="admin_header-account">{userInfo.data.userName}</h3>
    </S.AdminHeaderContainer>
  );
};

export default AdminHeader;
