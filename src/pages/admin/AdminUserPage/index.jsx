import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getUserListAction } from "../../../redux/actions";
import { ACCOUNT_LIST_LIMIT } from "../../../constants/paginations";

import {
  Col,
  Row,
  Table,
  Space,
  Button,
  Input,
  Select,
  Pagination,
} from "antd";

import * as S from "./style";

const AdminUsersPage = () => {
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

    document.title = "Danh sách người dùng";
  }, []);

  const initialFilterParams = {
    keyword: "",
    role: [],
    orderSort: "",
    spendSort: "",
    sort: "",
  };
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
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Đơn hàng",
      dataIndex: "orders",
      key: "orders",
      align: "center",
      render: (_, record) => {
        return <p>{record.orderQuantity}</p>;
      },
    },
    {
      title: "Tổng chi tiêu",
      dataIndex: "totalSpend",
      key: "totalSpend",
      align: "center",
      render: (_, record) => {
        return (
          <p>
            {record.totalSpend?.toLocaleString()}
            <sup>đ</sup>
          </p>
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
            <Button>Nhắn tin</Button>
          </>
        );
      },
    },
  ];

  const tableData = userList.data.map((item) => ({ ...item, key: item.id }));

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h2>Danh sách người dùng ({userList.meta.total})</h2>
      </S.TopWrapper>

      <Row gutter={4} style={{ flex: 1 }}>
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
              <p>Sắp xếp theo</p>

              <Select
                style={{ width: "100%" }}
                onChange={(value) => handleFilter(value, "sort")}
                value={filterParams.sort}
                allowClear
                placeholder="Sắp xếp theo"
              >
                <Select.Option value="desc.orderQuantity">
                  Đơn hàng: Nhiều - Ít
                </Select.Option>
                <Select.Option value="asc.orderQuantity">
                  Đơn hàng: Ít - Nhiều
                </Select.Option>
                <Select.Option value="desc.totalSpend">
                  Chi tiêu: Cao - Thấp
                </Select.Option>
                <Select.Option value="asc.totalSpend">
                  Chi tiêu: Thấp - Cao
                </Select.Option>
              </Select>
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

export default AdminUsersPage;
