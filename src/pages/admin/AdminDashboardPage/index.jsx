import { useEffect } from "react";

import {
  SearchOutlined,
  BellOutlined,
  SettingOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Avatar, Col, DatePicker, Image, Row, Table } from "antd";
import * as S from "./style";

import imageUser from "../../../assets/banner/bgr-img.jpg";
import ChartInfo from "./components/chart";

import { PieChart } from "react-minimal-pie-chart";

const itemDashBoard = {
  backgroundColor: "#fff",
  borderRadius: 10,
  marginBottom: 30.515,
  boxShadow: "3px 2px 15px #ccc",
};
const columns = [
  {
    title: "Sản phẩm",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Ngày bán",
    dataIndex: "dateTime",
    key: "dateTime",
  },
  {
    title: "Giá",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Số lượng",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "Tổng",
    key: "amount",
    dataIndex: "amount",
  },
];
const data = [
  {
    key: "1",
    product: "Đồng hồ CASIO 41 mm Nam MTP-VD02L-7EUDF ",
    dateTime: 32,
    price: "1099000",
    quantity: 2,
    amount: `$2198000`,
  },
  {
    key: "2",
    product: "Đồng hồ CASIO 40 mm Nam MTP-VT01GL-1B2UDF ",
    dateTime: 42,
    price: "1099000",
    quantity: 2,
    amount: `$2198000`,
  },
  {
    key: "3",
    product: "Đồng hồ CASIO 40 mm Nam MTP-V005L-7B5UDF",
    dateTime: 32,
    price: "1099000",
    quantity: 2,
    amount: `$2198000`,
  },
  {
    key: "4",
    product: "Đồng hồ CASIO 40.6 mm Nam MTP-E350L-1BVDF",
    dateTime: 32,
    price: "1099000",
    quantity: 2,
    amount: `$2198000`,
  },
];
const AdminDashboardPage = () => {
  useEffect(() => {
    document.title = "Trang quản trị";
  }, []);

  return (
    <S.DashBoardWrapper>
      <div style={{ padding: 20 }}>
        <Row
          justify="end"
          align="center"
          style={{ fontSize: 30, margin: "0 30px 10px 0" }}
        >
          <SettingOutlined style={{ marginRight: 10 }} />
          <BellOutlined style={{ marginRight: 10 }} />
          <SearchOutlined style={{ marginRight: 10 }} />
          <Avatar size="large" src={<Image src={imageUser} />} />
        </Row>
        <Row style={{ margin: "0 0 20px 20px" }}>
          <h2 style={{ marginRight: 50 }}>BẢN ĐIỀU KHIỂN</h2>
          <DatePicker />
        </Row>

        <Row justify="space-between" style={{ width: "90%", margin: "0 auto" }}>
          <Col span={4}>
            <Col span={24} style={itemDashBoard}>
              <S.ItemDashBoardTop>
                <h3>Khách hàng</h3>
                <p className="price">$50000000</p>
                <span className="up">
                  <ArrowUpOutlined /> 4,56%
                </span>
                <p>Kể từ tháng trước</p>
              </S.ItemDashBoardTop>
            </Col>
            <Col span={24} style={itemDashBoard}>
              <S.ItemDashBoardTop>
                <h3>Đơn đặt hàng</h3>
                <p className="price">$50000000</p>
                <span className="down">
                  <ArrowDownOutlined /> 4,56%
                </span>
                <p>Kể từ tháng trước</p>
              </S.ItemDashBoardTop>
            </Col>
          </Col>
          <Col span={4}>
            <Col span={24} style={itemDashBoard}>
              <S.ItemDashBoardTop>
                <h3>Thu nhập</h3>
                <p className="price">$50000000</p>
                <span className="up">
                  <ArrowUpOutlined /> 4,56%
                </span>
                <p>Kể từ tháng trước</p>
              </S.ItemDashBoardTop>
            </Col>
            <Col span={24} style={itemDashBoard}>
              <S.ItemDashBoardTop>
                <h3>Tăng trưởng</h3>
                <p className="price">$50000000</p>
                <span className="down">
                  <ArrowDownOutlined /> 4,56%
                </span>
                <p>Kể từ tháng trước</p>
              </S.ItemDashBoardTop>
            </Col>
          </Col>
          <Col
            span={15}
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              marginBottom: 30.515,
              boxShadow: "3px 2px 15px #ccc",
            }}
          >
            <div style={{ padding: 20 }}>
              <h3 style={{ fontWeight: 200 }}>Doanh thu</h3>
              <ChartInfo />
            </div>
          </Col>
        </Row>
        <Row justify="space-between" style={{ width: "90%", margin: "0 auto" }}>
          <Col
            span={16}
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              marginBottom: 33.9,
              boxShadow: "3px 2px 15px #ccc",
            }}
          >
            <S.ItemDashBoardBot>
              <Row style={{ marginBottom: 20 }}>
                <h2>Sản phẩm bán chạy nhất</h2>
              </Row>
              <Table columns={columns} dataSource={data} />;
            </S.ItemDashBoardBot>
          </Col>
          <Col
            span={7}
            style={{
              padding: 20,
              backgroundColor: "#fff",
              borderRadius: 10,
              marginBottom: 33.9,
              boxShadow: "3px 2px 15px #ccc",
            }}
          >
            <Row>
              <h2>Tổng doanh số</h2>
            </Row>
            <PieChart
              lineWidth="50"
              center={[50, 50]}
              data={[
                { title: "One", value: 10, color: "blue" },
                { title: "Two", value: 15, color: "yellow" },
                { title: "Three", value: 20, color: "red" },
              ]}
            />
            ;
          </Col>
        </Row>
      </div>
    </S.DashBoardWrapper>
  );
};

export default AdminDashboardPage;
