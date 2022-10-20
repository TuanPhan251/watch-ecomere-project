import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { getUserListAction } from "../../../redux/actions";
import { ACCOUNT_LIST_LIMIT } from "../../../constants/paginations";

import { Col, Row, Table, Space, Avatar, Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons/lib/icons";

import * as S from "./styles";
import { ROUTES } from "../../../constants/routes";

const AdminAccountsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const { userList } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      getUserListAction({
        params: {
          page: 1,
          limit: ACCOUNT_LIST_LIMIT,
        },
      })
    );
  }, []);

  const tableColumn = [
    {
      title: "Tên tài khoản",
      dataIndex: "userName",
      key: "userName",
      render: (_, record) => {
        return (
          <Space>
            <Avatar shape="square" size={64}>
              <UserOutlined />
            </Avatar>
            <h4>{record.userName}</h4>
          </Space>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Loại tài khoản",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Tùy chọn",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <>
            <Button
              onClick={() =>
                navigate(
                  generatePath(ROUTES.ADMIN.ACCOUNT_DETAIL_PAGE, {
                    id: record.id,
                  })
                )
              }
            >
              Chi tiết
            </Button>
          </>
        );
      },
    },
  ];

  const tableData = userList.data.map((item) => ({ ...item, key: item.id }));

  return (
    <S.Wrapper>
      <S.Wrapper>
        <h3>Danh sách tài khoản ({userList.meta.total})</h3>
      </S.Wrapper>

      <Row gutter={4}>
        <Col span={4}>
          <p>bộ lọc</p>
        </Col>

        <Col span={20}>
          <Table
            loading={userList.loading}
            columns={tableColumn}
            dataSource={tableData}
            pagination={false}
            style={{ marginBottom: "auto" }}
          />
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default AdminAccountsPage;
