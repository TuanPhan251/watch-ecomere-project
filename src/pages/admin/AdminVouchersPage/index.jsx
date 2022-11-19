import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  InputNumber,
} from "antd";

import {
  getVoucherListAction,
  createVoucherAction,
  deleteVoucherAction,
  updateVoucherAction,
  getVoucherDetailAction,
} from "../../../redux/actions";

import * as S from "./styles";

const AdminVouchersPage = () => {
  const [categoryForm] = Form.useForm();
  const [updateForm] = Form.useForm();
  const dispatch = useDispatch();
  const {
    voucherList,
    voucherDetail,
    createVoucher,
    updateVoucher,
    deleteVoucher,
  } = useSelector((state) => state.discount);

  const initialFilterParams = { keyword: "" };
  const [filterParams, setFilterParams] = useState({ ...initialFilterParams });

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editId, setEditId] = useState(undefined);
  const [deleteId, setDeleteId] = useState(undefined);

  useEffect(() => {
    dispatch(
      getVoucherListAction({
        params: {
          page: 1,
          limit: 10,
        },
      })
    );

    document.title = "Danh sách voucher";
  }, []);

  const handleChangePage = (page) => {
    dispatch(
      getVoucherListAction({
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
      getVoucherListAction({
        params: {
          ...filterParams,
          [type]: value,
          page: 1,
          limit: 10,
        },
      })
    );
  };

  const handleOpenEditModal = (id) => {
    setEditId(id);
    dispatch(
      getVoucherDetailAction({
        id,
        callback: {
          showModal: () => {
            setShowEditModal(true);
          },
          setFieldValue: (name, value) => {
            updateForm.setFieldsValue({ name: name, discount: value });
          },
        },
      })
    );
  };

  const handleUpdateVoucher = (data) => {
    dispatch(
      updateVoucherAction({
        id: editId,
        data,
        callback: {
          closeModal: () => {
            setShowEditModal(false);
          },
          resetField: () => {
            updateForm.resetFields();
          },
          getVoucherList: () => {
            dispatch(
              getVoucherListAction({
                params: {
                  page: 1,
                  limit: 10,
                },
              })
            );
          },
        },
      })
    );
  };

  const handleCreateVoucher = (values) => {
    dispatch(
      createVoucherAction({
        data: values,
        callback: {
          resetField: () => {
            categoryForm.resetFields();
          },
          closeModal: () => {
            setShowModal(false);
          },
          getVoucherList: () => {
            dispatch(
              getVoucherListAction({
                params: {
                  page: 1,
                  limit: 10,
                },
              })
            );
          },
        },
      })
    );
  };

  const handleDeleteVoucher = (id) => {
    dispatch(
      deleteVoucherAction({
        id,
        callback: {
          closeModal: () => {
            setShowDeleteModal(false);
          },
          getVoucherList: () => {
            dispatch(
              getVoucherListAction({
                params: {
                  page: 1,
                  limit: 10,
                },
              })
            );
          },
        },
      })
    );
  };

  const tableColumn = [
    {
      title: "Mã giảm giá",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phần trăm giảm",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Tùy chọn",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button
            loading={voucherDetail.loading}
            onClick={() => handleOpenEditModal(record.id)}
          >
            <i className="fa-solid fa-pen-to-square"></i>
            <span style={{ marginLeft: 4 }}>Sửa</span>
          </Button>
          <Button
            type="danger"
            onClick={() => {
              setDeleteId(record.id);
              setShowDeleteModal(true);
            }}
          >
            <i className="fa-solid fa-trash"></i>
            <span style={{ marginLeft: 4 }}>Xóa</span>
          </Button>
        </Space>
      ),
      width: 200,
    },
  ];

  const tableData = voucherList.data.map((item) => ({
    ...item,
    key: item.id,
  }));

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h2>Danh sách mã giảm giá</h2>
        <Button type="primary" onClick={() => setShowModal(true)}>
          Thêm mã giảm giá
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
            loading={voucherList.loading}
            columns={tableColumn}
            dataSource={tableData}
            pagination={false}
            style={{ marginBottom: "auto" }}
          />
        </Col>
      </Row>

      <Pagination
        style={{ margin: "20px auto 0" }}
        current={voucherList.meta.page}
        pageSize={10}
        total={voucherList.meta.total}
        onChange={(page) => handleChangePage(page)}
      />

      <Modal
        open={showModal}
        title="Thêm voucher"
        okText="Tạo"
        cancelText="Hủy"
        onCancel={() => setShowModal(false)}
        confirmLoading={createVoucher.loading}
        onOk={() => {
          categoryForm
            .validateFields()
            .then((values) => {
              handleCreateVoucher(values);
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
            label="Mã giảm"
            rules={[
              {
                required: true,
                message: "Bạn phải nhập mã giảm",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="discount"
            label="Phần trăm giảm"
            rules={[
              {
                required: true,
                message: "Bạn phải nhập Phần trăm giảm",
              },
            ]}
          >
            <InputNumber min={0} max={99} />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={showEditModal}
        title="Sửa voucher"
        okText="Sửa"
        cancelText="Hủy"
        onCancel={() => setShowEditModal(false)}
        confirmLoading={updateVoucher.loading}
        onOk={() => {
          updateForm
            .validateFields()
            .then((values) => {
              handleUpdateVoucher(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={updateForm}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item
            name="name"
            label="Mã giảm"
            rules={[
              {
                required: true,
                message: "Bạn phải nhập mã giảm",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="discount"
            label="Phần trăm giảm"
            rules={[
              {
                required: true,
                message: "Bạn phải nhập Phần trăm giảm",
              },
            ]}
          >
            <InputNumber min={0} max={99} />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={showDeleteModal}
        title="Xóa voucher"
        okText="Xóa"
        cancelText="Hủy"
        onOk={() => handleDeleteVoucher(deleteId)}
        onCancel={() => setShowDeleteModal(false)}
        confirmLoading={deleteVoucher.loading}
      >
        <p>Xác nhận xóa voucher này?</p>
      </Modal>
    </S.Wrapper>
  );
};

export default AdminVouchersPage;
