import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import moment from "moment";

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
  Select,
} from "antd";

import {
  getCategoriesListAction,
  getProductListAction,
  deleteProductAction,
  removeProductDetailAction,
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
  const initialFilterParams = {
    categoryId: [],
    keyword: "",
    gender: [],
    priceRange: [0, MAXPRICE],
    priceSort: "",
    isNew: false,
    isDiscount: false,
  };
  const [filterParams, setFilterParams] = useState({ ...initialFilterParams });

  const handleFilter = (value, type) => {
    setFilterParams({
      ...filterParams,
      [type]: value,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          [type]: value,
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
          ...filterParams,
          page: 1,
          limit: 10,
        },
      })
    );
    dispatch(getCategoriesListAction());

    return () => {
      dispatch(removeProductDetailAction());
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
            {record.isNew && <span style={{ color: "red" }}>(Mới)</span>}
            <h4>{record.name}</h4>
          </Space>
        );
      },
    },
    {
      title: "Hãng",
      dataIndex: "category",
      key: "category",
      align: "center",
      render: (category) => category.name,
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      align: "center",
      render: (_, record) => <p>{record.gender === "male" ? "Nam" : "Nữ"}</p>,
      // render: (_, record) => <p>{moment(record.createdAt).fromNow()}</p>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      align: "center",
      width: 120,
      render: (_, record) => (
        <p>
          {record.price.toLocaleString()}
          <sup>đ</sup>
        </p>
      ),
    },
    {
      title: "Khuyến mãi",
      dataIndex: "discountPercent",
      key: "discountPercent",
      align: "center",
      render: (discountPercent) => `${discountPercent} %`,
    },
    {
      title: "Tùy chọn",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, record) => {
        return (
          <>
            <Space>
              <Button type="danger" onClick={() => setShowModal(true)}>
                <i className="fa-solid fa-trash"></i>
                <span style={{ marginLeft: 4 }}>Xóa</span>
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
                <i className="fa-solid fa-pen-to-square"></i>
                <span style={{ marginLeft: 4 }}>Sửa</span>
              </Button>
            </Space>

            <S.ConfirmModal
              title="Xóa sản phẩm"
              open={showModal}
              centered
              destroyOnClose={true}
              maskStyle={{ backgroundColor: "rgba(0,0,0, 0.1)" }}
              style={{ boxShadow: "none" }}
              onOk={() => handleDeleteProduct(record.id)}
              onCancel={() => setShowModal(false)}
              okText="Xác nhận"
              cancelText="Hủy"
              confirmLoading={deleteProductData.loading}
            >
              <p>Không thể hoàn tác sau khi xác nhận, đồng ý xóa ?</p>
            </S.ConfirmModal>
          </>
        );
      },
    },
  ];

  const tableData = productList.data.map((item) => ({ ...item, key: item.id }));

  return (
    <S.ProductListContainer>
      <S.ProductListHeading>
        <h2>Danh sách sản phẩm ({productList.meta.total}) :</h2>
        <Button
          onClick={() => navigate(`${ROUTES.ADMIN.CREATE_PRODUCT_PAGE}`)}
          type="primary"
          size="large"
        >
          <i className="fa-solid fa-file-pen"></i>
          <span style={{ marginLeft: 4 }}>Thêm sản phẩm</span>
        </Button>
      </S.ProductListHeading>

      <Row gutter={4} style={{ flex: "1" }}>
        <Col span={4}>
          <h3>
            <i className="fa-solid fa-filter"></i>Bộ lọc
          </h3>

          <Input
            placeholder="Nhập để tìm sản phẩm"
            style={{ width: "100%" }}
            onChange={(e) => handleFilter(e.target.value, "keyword")}
          />

          <p>Hãng</p>
          <Checkbox.Group
            value={filterParams.categoryId}
            onChange={(value) => handleFilter(value, "categoryId")}
          >
            {renderCategoryOptions()}
          </Checkbox.Group>

          <p>Giới tính</p>
          <Checkbox.Group
            value={filterParams.gender}
            onChange={(value) => handleFilter(value, "gender")}
          >
            <Checkbox value="male">Nam</Checkbox>
            <Checkbox value="female">Nữ</Checkbox>
          </Checkbox.Group>

          <p>Giá</p>
          <Col span={24}>
            <Select
              style={{ width: "100%" }}
              onChange={(value) => handleFilter(value, "priceSort")}
              value={filterParams.priceSort}
            >
              <Select.Option value="desc">Giá: Cao-Thấp</Select.Option>
              <Select.Option value="asc">Giá: Thấp-Cao</Select.Option>
            </Select>
          </Col>

          <p>Loại sản phẩm</p>
          <Col span={24}>
            <Row>
              <Checkbox
                checked={filterParams.isNew}
                onChange={(e) => handleFilter(e.target.checked, "isNew")}
              >
                Sản phẩm mới
              </Checkbox>
            </Row>
          </Col>
          <Col span={24}>
            <Row>
              <Checkbox
                checked={filterParams.isDiscount}
                onChange={(e) => handleFilter(e.target.checked, "isDiscount")}
              >
                Đang giảm giá
              </Checkbox>
            </Row>
          </Col>

          <Col span={12} offset={6}>
            <Button
              danger
              ghost
              style={{
                marginTop: 24,
              }}
              onClick={() => setFilterParams({ ...initialFilterParams })}
            >
              Xóa bộ lọc
            </Button>
          </Col>
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
