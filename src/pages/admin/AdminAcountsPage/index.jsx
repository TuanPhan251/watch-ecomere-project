import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import moment from "moment";

import { getUserListAction } from "../../../redux/actions";
import { ACCOUNT_LIST_LIMIT } from "../../../constants/paginations";

import {
  Col,
  Row,
  Table,
  Space,
  Avatar,
  Button,
  Tag,
  Input,
  Checkbox,
  Pagination,
} from "antd";
import { UserOutlined } from "@ant-design/icons/lib/icons";

import * as S from "./styles";
import { ROUTES } from "../../../constants/routes";

const AdminAccountsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    document.title = "Danh sách tài khoản";
  }, []);

  const initialFilterParams = { keyword: "", role: [] };
  const [filterParams, setFilterParams] = useState({ ...initialFilterParams });

  const handleChangePage = (page) => {
    dispatch(
      getUserListAction({
        params: {
          page: page,
          limit: 10,
        },
      })
    );
  };

  const handleFilter = (value, type) => {
    setFilterParams({
      ...filterParams,
      [type]: value,
    });
    dispatch(
      getUserListAction({
        params: {
          ...filterParams,
          [type]: value,
          page: 1,
          limit: ACCOUNT_LIST_LIMIT,
        },
      })
    );
  };

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
      align: "center",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (_, record) => {
        return <p>{moment(record.createdAt).format("DD/MM/YYYY")}</p>;
      },
    },
    {
      title: "Loại tài khoản",
      dataIndex: "role",
      key: "role",
      align: "center",
      render: (_, record) => {
        return (
          <>
            {record.role === "admin" ? (
              <Tag color="#2db7f5">Admin</Tag>
            ) : (
              <Tag color="#87d068">User</Tag>
            )}
          </>
        );
      },
    },
    {
      title: "Tùy chọn",
      dataIndex: "action",
      key: "action",
      align: "center",
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
      <S.TopWrapper>
        <h2>Danh sách tài khoản ({userList.meta.total})</h2>
      </S.TopWrapper>

      <Row
        gutter={4}
        style={{
          flex: 1,
        }}
      >
        <Col span={4}>
          <Space direction="vertical">
            <h3>
              <i className="fa-solid fa-filter"></i>Bộ lọc
            </h3>

            <Col span={24}>
              <Input
                placeholder="Nhập để tìm kiếm"
                onChange={(e) => handleFilter(e.target.value, "keyword")}
              />
            </Col>

            <Col span={24}>
              <p>Loại tài khoản</p>

              <Checkbox.Group
                value={filterParams.role}
                onChange={(value) => handleFilter(value, "role")}
              >
                <Checkbox value="admin">Admin</Checkbox>
                <Checkbox value="user">User</Checkbox>
              </Checkbox.Group>
            </Col>
          </Space>
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
      <Pagination
        style={{ margin: "20px auto 0" }}
        current={userList.meta.page}
        pageSize={10}
        total={userList.meta.total}
        onChange={(page) => handleChangePage(page)}
      />
    </S.Wrapper>
  );
};

export default AdminAccountsPage;
