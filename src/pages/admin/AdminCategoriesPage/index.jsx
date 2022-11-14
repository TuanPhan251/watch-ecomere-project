import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

import { Button, Col, Row, Space, Table, Modal, Form, Input } from "antd";

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

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(
      getProductListAdminAction({
        params: {
          page: 1,
          limit: 999,
        },
      })
    );

    dispatch(getCategoriesListAction());
  }, []);

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
        <Button type="primary" size="large" onClick={() => setShowModal(true)}>
          Thêm nhãn hàng
        </Button>
      </S.TopWrapper>

      <Row gutter={4}>
        <Col span={4}>
          <p>bộ lọc</p>
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
