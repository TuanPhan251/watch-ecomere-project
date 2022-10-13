import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

import { Avatar, Button, Space, Table, Pagination, Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import {
  getCategoriesListAction,
  getProductListAction,
  deleteProductAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

import * as S from "./style";

const AdminProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList, deleteProductData } = useSelector(
    (state) => state.product
  );

  const [showModal, setShowModal] = useState(false);

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

  const handleDeleteProduct = (id) => {
    dispatch(
      deleteProductAction({
        id,
        params: {
          page: productList.meta.page,
          limit: 10,
        },
      })
    );
    setShowModal(false);
  };

  const handleChangePage = (page) => {
    dispatch(
      getProductListAction({
        params: {
          page: page,
          limit: 10,
        },
      })
    );
  };

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
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      render: (_, record) => <p>{record.gender === "male" ? "Nam" : "Nữ"}</p>,
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
      render: (_, record) => {
        return (
          <>
            <Space>
              <Button type="danger" onClick={() => setShowModal(true)}>
                Xóa
              </Button>

              <Button
                onClick={() =>
                  navigate(
                    generatePath(ROUTES.ADMIN.UPDATE_PRODUCT_PAGE, {
                      id: record.id,
                    })
                  )
                }
              >
                Sửa
              </Button>
            </Space>

            <Modal
              title="Xóa sản phẩm"
              open={showModal}
              centered
              onOk={() => handleDeleteProduct(record.id)}
              onCancel={() => setShowModal(false)}
              okText="Xác nhận"
              cancelText="Hủy"
              confirmLoading={productList.loading}
            >
              <p>Không thể hoàn tác sau khi xác nhận, đồng ý xóa ?</p>
            </Modal>
          </>
        );
      },
    },
  ];

  const tableData = productList.data.map((item) => ({ ...item, key: item.id }));

  return (
    <S.ProductListContainer loading={productList.loading}>
      <S.ProductListHeading>
        <h3>Danh sách sản phẩm ({productList.meta.total}) :</h3>
        <Button
          onClick={() => navigate(`${ROUTES.ADMIN.CREATE_PRODUCT_PAGE}`)}
          type="primary"
          size="large"
        >
          Thêm sản phẩm
        </Button>
      </S.ProductListHeading>

      {productList.loading ? (
        <LoadingOutlined
          style={{
            fontSize: "60px",
            marginTop: "200px",
          }}
        />
      ) : (
        <>
          <Table
            columns={tableColumn}
            dataSource={tableData}
            pagination={false}
            style={{ flex: "1" }}
          />
          <Pagination
            style={{ margin: "20px auto 0" }}
            current={productList.meta.page}
            pageSize={10}
            total={productList.meta.total}
            onChange={(page) => handleChangePage(page)}
          />
        </>
      )}
    </S.ProductListContainer>
  );
};

export default AdminProductPage;
