import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

import { Button, Col, Row, Space, Table } from "antd";

import {
  getCategoriesListAction,
  getProductListAction,
} from "../../../redux/actions";

import * as S from "./styles";
import { ROUTES } from "../../../constants/routes";

const AdminCategoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: 999,
        },
      })
    );

    dispatch(getCategoriesListAction());
  }, []);

  const tableColumn = [
    {
      title: "Tên thương hiệu",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số sản phẩm",
      dataIndex: "quantity",
      key: "quantity",
      render: (_, record) => {
        const itemQuantity = productList.data.filter(
          (item) => item.category.id === record.id
        ).length;
        return <p>{itemQuantity}</p>;
      },
    },
    {
      title: "Tùy chọn",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Space>
          <Button>Chi tiết</Button>
          <Button type="danger">Xóa</Button>
        </Space>
      ),
    },
  ];

  const tableData = categoryList.data.map((item) => ({
    ...item,
    key: item.id,
  }));

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Danh sách nhãn hàng</h3>
        <Button type="primary" size="large">
          Thêm nhãn hàng
        </Button>
      </S.TopWrapper>

      <Row gutter={4}>
        <Col span={4}>
          <p>bộ lọc</p>
        </Col>

        <Col span={20}>
          <Table
            loading={productList.loading}
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

export default AdminCategoryPage;
