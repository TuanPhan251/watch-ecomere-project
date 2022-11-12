import { useSelector } from "react-redux";

import Layout from "./Layout";

import * as S from "./styles";

const UserInfoPage = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Layout>
      <S.Wrapper>
        <h3 className="user_info-title">Thông tin tài khoản</h3>

        <div className="user_info-summary">
          <p className="user_info-name">
            Tên người dùng: <span>{userInfo.data?.userName}</span>
          </p>

          <p className="user_info-email">
            Email: <span>{userInfo.data?.email}</span>
          </p>
        </div>
      </S.Wrapper>
    </Layout>
  );
};

export default UserInfoPage;
