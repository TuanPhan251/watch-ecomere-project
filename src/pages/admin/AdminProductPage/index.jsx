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
  Tag,
} from "antd";

import {
  getCategoriesListAction,
  getProductListAdminAction,
  deleteProductAction,
  removeProductDetailAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

import * as S from "./style";

const AdminProductPage = () => {
  const MAXPRICE = 15000000;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productListAdmin, deleteProductData } = useSelector(
    (state) => state.product
  );
  const { categoryList } = useSelector((state) => state.category);

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const initialFilterParams = {
    categoryId: [],
    keyword: "",
    gender: [],
    priceRange: [0, MAXPRICE],
    sort: "",
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
      getProductListAdminAction({
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
      getProductListAdminAction({
        params: {
          ...filterParams,
          page: 1,
          limit: 10,
        },
      })
    );
    dispatch(
      getCategoriesListAction({
        params: {
          page: 1,
          limit: 999,
        },
      })
    );

    return () => {
      dispatch(removeProductDetailAction());
    };
  }, [filterParams]);

  const handleDeleteProduct = (id) => {
    dispatch(
      deleteProductAction({
        id,
        params: {
          page: productListAdmin.meta.page,
          limit: 10,
        },
        callback: {
          getProductList: () => {
            dispatch(
              getProductListAdminAction({
                params: {
                  ...filterParams,
                  page: 1,
                  limit: 10,
                },
              })
            );
          },
          closeModal: () => {
            setShowModal(false);
          },
        },
      })
    );
  };

  const handleChangePage = (page) => {
    dispatch(
      getProductListAdminAction({
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
            <Avatar shape="square" size={64} src={record.images[0].url} />
            {record.isNew && <Tag color="#f50">Mới</Tag>}
            <h4>{record.name}</h4>
          </Space>
        );
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "isHidden",
      key: "isHidden",
      align: "center",
      render: (_, record) => {
        return (
          <>
            {record.isHidden ? (
              <Tag color="red">Ẩn</Tag>
            ) : (
              <Tag color="green">Hiện</Tag>
            )}
          </>
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
      render: (_, record) => (
        <>
          {record.gender === "male" ? (
            <Tag color="blue">Nam</Tag>
          ) : (
            <Tag color="purple">Nữ</Tag>
          )}
        </>
      ),
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
      title: "Kho",
      dataIndex: "stock",
      key: "stock",
      align: "center",
      width: 40,
    },
    {
      title: "Khuyến mãi",
      dataIndex: "discountPercent",
      key: "discountPercent",
      align: "center",
      render: (discountPercent) => `${discountPercent} %`,
      width: 80,
    },
    {
      title: "Tùy chọn",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_, record) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                type="danger"
                onClick={() => {
                  setDeleteId(record.id);
                  setShowModal(true);
                }}
                style={{ marginBottom: 8 }}
              >
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
            </div>

            <S.ConfirmModal
              title="Xóa sản phẩm"
              open={showModal}
              centered
              destroyOnClose={true}
              maskStyle={{ backgroundColor: "rgba(0,0,0, 0.1)" }}
              style={{ boxShadow: "none" }}
              onOk={() => handleDeleteProduct(deleteId)}
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

  const tableData = productListAdmin.data.map((item) => ({
    ...item,
    key: item.id,
  }));

  return (
    <S.ProductListContainer>
      <S.ProductListHeading>
        <h2>Danh sách sản phẩm ({productListAdmin.meta.total}) :</h2>
        <Button
          onClick={() => navigate(`${ROUTES.ADMIN.CREATE_PRODUCT_PAGE}`)}
          type="primary"
        >
          <i className="fa-solid fa-file-pen"></i>
          <span style={{ marginLeft: 4 }}>Thêm sản phẩm</span>
        </Button>
      </S.ProductListHeading>

      <Row gutter={4} style={{ flex: "1" }}>
        <Col span={4}>
          <Space direction="vertical">
            <h3>
              <i className="fa-solid fa-filter"></i>Bộ lọc
            </h3>

            <Col span={24}>
              <Input
                placeholder="Nhập để tìm sản phẩm"
                style={{ width: "100%" }}
                onChange={(e) => handleFilter(e.target.value, "keyword")}
              />
            </Col>

            <Col span={24}>
              <p>Hãng</p>
              <Checkbox.Group
                value={filterParams.categoryId}
                onChange={(value) => handleFilter(value, "categoryId")}
              >
                {renderCategoryOptions()}
              </Checkbox.Group>
            </Col>

            <Col span={24}>
              <p>Giới tính</p>
              <Checkbox.Group
                value={filterParams.gender}
                onChange={(value) => handleFilter(value, "gender")}
              >
                <Checkbox value="male">Nam</Checkbox>
                <Checkbox value="female">Nữ</Checkbox>
              </Checkbox.Group>
            </Col>

            <Col span={24}>
              <p>Sắp xếp theo</p>
              <Select
                style={{ width: "100%" }}
                onChange={(value) => handleFilter(value, "sort")}
                value={filterParams.sort}
              >
                <Select.Option value="desc.price">Giá: Cao-Thấp</Select.Option>
                <Select.Option value="asc.price">Giá: Thấp-Cao</Select.Option>
                <Select.Option value="desc.stock">
                  Tồn kho: Cao-Thấp
                </Select.Option>
                <Select.Option value="asc.stock">
                  Tồn kho: Thấp-Cao
                </Select.Option>
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
          </Space>
        </Col>
        <Col span={20}>
          <Table
            loading={productListAdmin.loading}
            columns={tableColumn}
            dataSource={tableData}
            pagination={false}
            style={{ marginBottom: "auto" }}
          />
        </Col>
      </Row>
      <Pagination
        style={{ margin: "20px auto 0" }}
        current={productListAdmin.meta.page}
        pageSize={10}
        total={productListAdmin.meta.total}
        onChange={(page) => handleChangePage(page)}
      />
    </S.ProductListContainer>
  );
};

export default AdminProductPage;
