import * as S from "./styles";

const AdminHeader = ({ setShowSidebar, showSidebar }) => {
  return (
    <S.AdminHeaderContainer>
      <button
        className="admin_header-sidebar-btn"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <h2 className="admin_header-heading">admin page</h2>

      <h3 className="admin_header-account">Tuấn, Phương</h3>
    </S.AdminHeaderContainer>
  );
};

export default AdminHeader;
