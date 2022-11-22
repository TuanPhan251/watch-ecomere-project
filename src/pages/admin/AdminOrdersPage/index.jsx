import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";

import { getAllOrdersAction } from "../../../redux/actions";

import {
  Button,
  Col,
  Row,
  Table,
  Pagination,
  Space,
  Input,
  Select,
  Tag,
} from "antd";
import * as S from "./styles";
import { generatePath, Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const AdminOrderListPage = () => {
  const dispatch = useDispatch();
  const { allOrders } = useSelector((state) => state.order);

  const initialFilterParams = { keyword: "", priceSort: "" };
  const [filterParams, setFilterParams] = useState({ ...initialFilterParams });

  useEffect(() => {
    dispatch(
      getAllOrdersAction({
        params: {
          page: 1,
          limit: 10,
        },
      })
    );

    document.title = "Danh sách đơn hàng";
  }, []);

  const handleChangePage = (page) => {
    dispatch(
      getAllOrdersAction({
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
      getAllOrdersAction({
        params: {
          ...filterParams,
          [type]: value,
          page: 1,
          limit: 10,
        },
      })
    );
  };

  const tableColumn = [
    {
      title: "Ngày đặt",
      dataIndex: "orderDate",
      key: "orderDate",
      align: "center",
      render: (_, record) => {
        return <span>{moment(record.createdAt).format("DD/MM/YYYY")}</span>;
      },
    },
    {
      title: "Tên người nhận",
      dataIndex: "nameInfo",
      key: "nameInfo",
      align: "center",
    },
    {
      title: "Số sản phẩm",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      render: (_, record) => {
        return record.orderProducts?.length;
      },
    },
    {
      title: "Địa chỉ giao",
      dataIndex: "address",
      key: "address",
      align: "center",
      render: (_, record) => {
        const orderAddress = `${record.address}, ${record.wardName}, ${record.districtName}, ${record.cityName}`;
        return <span>{orderAddress}</span>;
      },
    },
    {
      title: "Thành tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      align: "center",
      render: (_, record) => {
        return (
          <span>
            {record.totalPrice?.toLocaleString()} <sup>đ</sup>
          </span>
        );
      },
      width: 120,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (_, record) => {
        switch (record.status) {
          case "delivering": {
            return (
              <S.OrderStatus>
                <Tag color="blue">
                  <i className="fa-solid fa-truck-fast"></i>Đang giao
                </Tag>
              </S.OrderStatus>
            );
          }
          case "cancel": {
            return (
              <S.OrderStatus>
                <Tag color="red">
                  <i className="fa-solid fa-circle-xmark"></i>Admin hủy
                </Tag>
              </S.OrderStatus>
            );
          }
          case "userCancel": {
            return (
              <S.OrderStatus>
                <Tag color="red">
                  <i className="fa-solid fa-circle-xmark"></i>Đã hủy
                </Tag>
              </S.OrderStatus>
            );
          }
          case "done": {
            return (
              <S.OrderStatus>
                <Tag color="green">
                  <i className="fa-solid fa-circle-check"></i>Hoàn thành
                </Tag>
              </S.OrderStatus>
            );
          }
          default: {
            return (
              <S.OrderStatus>
                <Tag>
                  <i className="fa-solid fa-clock-rotate-left"></i>Chờ xử lý
                </Tag>
              </S.OrderStatus>
            );
          }
        }
      },
    },
    {
      title: "Tùy chọn",
      dataIndex: "actions",
      key: "actions",
      align: "center",
      render: (_, record) => {
        return (
          <Button>
            <Link
              to={generatePath(ROUTES.ADMIN.ORDER_DETAIL_PAGE, {
                id: record.id,
              })}
            >
              Chi tiết
            </Link>
          </Button>
        );
      },
    },
  ];

  const tableData = allOrders.data.map((item) => ({ ...item, key: item.id }));

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h2>Danh sách đơn hàng ({allOrders.data.length})</h2>
      </S.TopWrapper>

      <Row style={{ flex: 1 }}>
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
              <p>Giá trị đơn</p>

              <Select
                style={{ width: "100%" }}
                onChange={(value) => handleFilter(value, "priceSort")}
                value={filterParams.priceSort}
                allowClear
                placeholder="Sắp xếp theo"
              >
                <Select.Option value="desc">Từ: Cao - Thấp</Select.Option>
                <Select.Option value="asc">Từ: Thấp - Cao</Select.Option>
              </Select>
            </Col>
          </Space>
        </Col>

        <Col span={20}>
          <Table
            loading={allOrders.loading}
            columns={tableColumn}
            dataSource={tableData}
            pagination={false}
            style={{ marginBottom: "auto" }}
          />
        </Col>
      </Row>
      <Pagination
        style={{ margin: "20px auto 0" }}
        current={allOrders.meta.page}
        pageSize={10}
        total={allOrders.meta.total}
        onChange={(page) => handleChangePage(page)}
      />
    </S.Wrapper>
  );
};

export default AdminOrderListPage;
