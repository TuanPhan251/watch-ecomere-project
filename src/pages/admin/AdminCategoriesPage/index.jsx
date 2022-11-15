import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

import {
  Button,
  Col,
  Row,
  Space,
  Table,
  Modal,
  Form,
  Input,
  Pagination,
} from "antd";

import {
  getCategoriesListAction,
  getProductListAdminAction,
  createCategoryAction,
} from "../../../redux/actions";

import * as S from "./styles";
import { ROUTES } from "../../../constants/routes";

const AdminCategoryPage = () => {
  const [categoryForm] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryList, createCategory } = useSelector(
    (state) => state.category
  );
  const { productListAdmin } = useSelector((state) => state.product);

  const initialFilterParams = { keyword: "" };
  const [filterParams, setFilterParams] = useState({ ...initialFilterParams });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(
      getProductListAdminAction({
        params: {
          page: 1,
          limit: 10,
        },
      })
    );

    dispatch(
      getCategoriesListAction({
        params: {
          page: 1,
          limit: 10,
        },
      })
    );
  }, []);

  const handleChangePage = (page) => {
    dispatch(
      getCategoriesListAction({
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
      getCategoriesListAction({
        params: {
          ...filterParams,
          [type]: value,
          page: 1,
          limit: 10,
        },
      })
    );
  };

  const handleCreateCategory = (values) => {
    dispatch(
      createCategoryAction({
        data: values,
        callback: {
          resetField: () => {
            categoryForm.resetFields();
          },
          closeModal: () => {
            setShowModal(false);
          },
        },
      })
    );
  };

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
        const itemQuantity = productListAdmin.data.filter(
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
          <Button type="danger">Tạm ẩn</Button>
        </Space>
      ),
      width: 300,
    },
  ];

  const tableData = categoryList.data.map((item) => ({
    ...item,
    key: item.id,
  }));

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h2>Danh sách nhãn hàng</h2>
        <Button type="primary" onClick={() => setShowModal(true)}>
          Thêm nhãn hàng
        </Button>
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
          </Space>
        </Col>

        <Col span={20}>
          <Table
            loading={productListAdmin.loading || categoryList.loading}
            columns={tableColumn}
            dataSource={tableData}
            pagination={false}
            style={{ marginBottom: "auto" }}
          />
        </Col>
      </Row>

      <Pagination
        style={{ margin: "20px auto 0" }}
        current={categoryList.meta.page}
        pageSize={10}
        total={categoryList.meta.total}
        onChange={(page) => handleChangePage(page)}
      />

      <Modal
        open={showModal}
        title="Thêm nhãn hàng mới"
        okText="Tạo"
        cancelText="Hủy"
        onCancel={() => setShowModal(false)}
        confirmLoading={createCategory.loading}
        onOk={() => {
          categoryForm
            .validateFields()
            .then((values) => {
              handleCreateCategory(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={categoryForm}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item
            name="name"
            label="Tên nhãn hàng"
            rules={[
              {
                required: true,
                message: "Bạn phải nhập tên nhãn hàng",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </S.Wrapper>
  );
};

export default AdminCategoryPage;
