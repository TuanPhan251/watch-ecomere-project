import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Col, Row } from "antd";

import { getOrderListAction } from "../../../../redux/actions";

import UserSideBar from "../SideBar";
import * as S from "./styles";

const UserInfoOrderPage = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrderListAction({ userId: userInfo.data.id }));
  }, []);

  return (
    <S.Wrapper>
      <S.TopSpacer></S.TopSpacer>
      <S.UserPageContent>
        <Row gutter={16}>
          <Col span={6}>
            <UserSideBar />
          </Col>
          <Col span={18}>
            <S.UserInfo>
              <h3 className="user_info-title">Lịch sử mua hàng</h3>
            </S.UserInfo>
          </Col>
        </Row>
      </S.UserPageContent>
    </S.Wrapper>
  );
};

export default UserInfoOrderPage;
