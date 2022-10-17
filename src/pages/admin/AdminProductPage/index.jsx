import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

import {
  Avatar,
  Button,
  Space,
  Table,
  Pagination,
  Modal,
  Input,
  Row,
  Col,
  Checkbox,
  Slider,
} from "antd";

import {
  getCategoriesListAction,
  getProductListAction,
  deleteProductAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

import * as S from "./style";

const AdminProductPage = () => {
  const MAXPRICE = 15000000;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList, deleteProductData } = useSelector(
    (state) => state.product
  );
  const { categoryList } = useSelector((state) => state.category);

  const [showModal, setShowModal] = useState(false);
  const [filterParams, setFilterParams] = useState({
    categoryId: [],
    keyword: "",
    gender: [],
    priceRange: [0, MAXPRICE],
  });

  const handleChangeFilterParams = (value, type) => {
    setFilterParams({
      ...filterParams,
      [type]: value,
    });
  };

  const handleFilter = () => {
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          page: 1,
          limit: 10,
        },
      })
    );
  };

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

  useEffect(() => {
    const filter = setTimeout(handleFilter, 300);

    return () => {
      clearTimeout(filter);
    };
  }, [filterParams]);

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

  const renderCategoryOptions = () => {
    return categoryList.data.map((item) => {
      return (
        <Col span={24} key={item.id}>
          <Checkbox value={item.id}>{item.name}</Checkbox>
        </Col>
      );
    });
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

      <Row gutter={4} style={{ flex: "1" }}>
        <Col span={4}>
          <p>Bộ lọc</p>

          <Input
            placeholder="Nhập để tìm sản phẩm"
            style={{ width: "100%" }}
            onChange={(e) =>
              handleChangeFilterParams(e.target.value, "keyword")
            }
          />

          <p>Hãng</p>
          <Checkbox.Group
            value={filterParams.categoryId}
            onChange={(value) => handleChangeFilterParams(value, "categoryId")}
          >
            {renderCategoryOptions()}
          </Checkbox.Group>

          <p>Giới tính</p>
          <Checkbox.Group
            value={filterParams.gender}
            onChange={(value) => handleChangeFilterParams(value, "gender")}
          >
            <Checkbox value="male">Nam</Checkbox>
            <Checkbox value="female">Nữ</Checkbox>
          </Checkbox.Group>

          <p>Giá</p>
          <Slider
            range
            min={0}
            max={15000000}
            step={100000}
            onAfterChange={(value) =>
              handleChangeFilterParams(value, "priceRange")
            }
          ></Slider>

          <Button
            onClick={() =>
              setFilterParams({
                categoryId: [],
                keyword: "",
                gender: [],
                priceRange: [0, MAXPRICE],
              })
            }
          >
            Xóa bộ lọc
          </Button>
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
      <Pagination
        style={{ margin: "20px auto 0" }}
        current={productList.meta.page}
        pageSize={10}
        total={productList.meta.total}
        onChange={(page) => handleChangePage(page)}
      />
    </S.ProductListContainer>
  );
};

export default AdminProductPage;
