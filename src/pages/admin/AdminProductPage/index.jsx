import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Avatar, Button, Space, Table, Pagination } from "antd";

import {
  getCategoriesListAction,
  getProductListAction,
  createProductAction,
  updateProductAction,
  deleteProductAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

import * as S from "./style";

const AdminProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: 10,
        },
      })
    );
    dispatch(getCategoriesListAction());
  }, []);

  const tableColumn = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return (
          <Space>
            <Avatar shape="square" size={64} src={record.image} />
            <h4>{record.name}</h4>
          </Space>
        );
      },
    },
    {
      title: "Hãng",
      dataIndex: "category",
      key: "category",
      render: (category) => category.name,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price.toLocaleString()} đ`,
    },
    {
      title: "Tùy chọn",
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <Space>
            <Button type="danger">Xóa</Button>
            <Button>Sửa</Button>
          </Space>
        );
      },
    },
  ];

  const tableData = productList.data.map((item) => ({ ...item, key: item.id }));

  return (
    <S.ProductListContainer>
      <S.ProductListHeading>
        <h3>Product List</h3>
        <Button onClick={() => navigate(`${ROUTES.ADMIN.CREATE_PRODUCT_PAGE}`)}>
          Thêm sản phẩm
        </Button>
      </S.ProductListHeading>

      <S.ProductListTable>
        <Table
          columns={tableColumn}
          dataSource={tableData}
          pagination={false}
        />
        <Pagination
          current={productList.meta.page}
          pageSize={10}
          total={productList.meta.total}
          onChange={() => null}
        />
      </S.ProductListTable>
    </S.ProductListContainer>
  );
};

export default AdminProductPage;
