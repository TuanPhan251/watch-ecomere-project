import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment/moment";

import {
  getUserDetailAction,
  getOrderDetailAction,
  updateOrderStatusAction,
  updateUserInfoAction,
} from "../../../../redux/actions";
import { ROUTES } from "../../../../constants/routes";

import {
  Avatar,
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Spin,
  Table,
} from "antd";
import * as S from "./styles";

const { Option } = Select;

const AdminOrderDetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [infoForm] = Form.useForm();
  const { id } = useParams();
  const { orderDetail, updateOrderData } = useSelector((state) => state.order);
  const { userDetail } = useSelector((state) => state.user);
  const orderAddress = `${orderDetail.data?.address}, ${orderDetail.data?.wardName}, ${orderDetail.data?.districtName}, ${orderDetail.data?.cityName}`;

  useEffect(() => {
    dispatch(
      getOrderDetailAction({
        id,
        callback: {
          getOrderUser: (id) => {
            dispatch(getUserDetailAction({ id }));
          },
        },
      })
    );

    document.title = "Chi tiết đơn hàng";
  }, [id]);

  useEffect(() => {
    infoForm.setFieldsValue({
      nameInfo: orderDetail.data.nameInfo,
      emailInfo: orderDetail.data.emailInfo,
      address: orderAddress,
      type: orderDetail.data.userId ? "Thành viên" : "Khách vãng lai",
      status: orderDetail.data.status,
    });
  }, [orderDetail.data]);

  const handleUpdateOrderStatus = (value) => {
    const { status } = value;
    const { orderProducts, ...originalOrderData } = orderDetail.data;
    if (orderDetail.data.status === status) {
      return navigate(ROUTES.ADMIN.ORDER_LIST_PAGE);
    } else if (orderDetail.data.status !== "done" && status === "done") {
      return dispatch(
        updateOrderStatusAction({
          id: orderDetail.data.id,
          data: {
            ...originalOrderData,
            status: status,
          },
          callback: {
            updateUserInfo: () => {
              dispatch(
                updateUserInfoAction({
                  id: orderDetail.data.userId,
                  values: {
                    orderQuantity: userDetail.data.orderQuantity + 1,
                    totalSpend:
                      userDetail.data.totalSpend + orderDetail.data.totalPrice,
                  },
                })
              );
            },
            goToList: () => {
              navigate(ROUTES.ADMIN.ORDER_LIST_PAGE);
            },
          },
        })
      );
    } else if (orderDetail.data.status === "done") {
      return dispatch(
        updateOrderStatusAction({
          id: orderDetail.data.id,
          data: {
            ...originalOrderData,
            status: status,
          },
          callback: {
            updateUserInfo: () => {
              dispatch(
                updateUserInfoAction({
                  id: orderDetail.data.userId,
                  values: {
                    orderQuantity: userDetail.data.orderQuantity - 1,
                    totalSpend:
                      userDetail.data.totalSpend - orderDetail.data.totalPrice,
                  },
                })
              );
            },
            goToList: () => {
              navigate(ROUTES.ADMIN.ORDER_LIST_PAGE);
            },
          },
        })
      );
    } else {
      dispatch(
        updateOrderStatusAction({
          id: orderDetail.data.id,
          data: {
            ...originalOrderData,
            status: status,
          },
          callback: {
            goToList: () => {
              navigate(ROUTES.ADMIN.ORDER_LIST_PAGE);
            },
          },
        })
      );
    }
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
            <h4>{record.productName}</h4>
          </Space>
        );
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
      width: 200,
      render: (_, record) => (
        <p>
          {record.price.toLocaleString()}
          <sup>đ</sup>
        </p>
      ),
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      width: 200,
      render: (_, record) => (
        <p>
          {(record.quantity * record.price).toLocaleString()}
          <sup>đ</sup>
        </p>
      ),
    },
  ];

  const tableData = orderDetail.data?.orderProducts?.map((item) => ({
    ...item,
    key: item.id,
  }));

  if (orderDetail.loading)
    return (
      <S.Wrapper>
        <Spin spinning={orderDetail.data.loading}>
          <div
            style={{
              minHeight: "100vh",
            }}
          ></div>
        </Spin>
      </S.Wrapper>
    );

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h2>Chi tiết đơn hàng</h2>
      </S.TopWrapper>

      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Card size="small" title="Thông tin người nhận">
            <Form
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 8,
              }}
              form={infoForm}
              onFinish={(value) => handleUpdateOrderStatus(value)}
            >
              <Form.Item label="Tên người nhận" name="nameInfo">
                <Input
                  style={{ backgroundColor: "#fafafa", color: "#000" }}
                  disabled={true}
                />
              </Form.Item>

              <Form.Item label="Email" name="emailInfo">
                <Input
                  style={{ backgroundColor: "#fafafa", color: "#000" }}
                  disabled={true}
                />
              </Form.Item>

              <Form.Item label="Địa chỉ giao hàng" name="address">
                <Input.TextArea
                  style={{ backgroundColor: "#fafafa", color: "#000" }}
                  disabled={true}
                />
              </Form.Item>

              <Form.Item label="Phân loại" name="type">
                <Input
                  style={{ backgroundColor: "#fafafa", color: "#000" }}
                  disabled={true}
                />
              </Form.Item>

              <Form.Item label="Trạng thái đơn hàng" name="status">
                <Select>
                  <Option value="pending">Chờ xác nhận</Option>
                  <Option value="delivering">Đang giao hàng</Option>
                  <Option value="done">Hoàn thành</Option>
                  <Option value="cancel">Hủy đơn</Option>
                  <Option value="userCancel" disabled>
                    Người đặt hủy
                  </Option>
                </Select>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Space>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={updateOrderData.loading}
                  >
                    Thay đổi
                  </Button>

                  <Button
                    onClick={() => navigate(ROUTES.ADMIN.ORDER_LIST_PAGE)}
                  >
                    {" "}
                    Quay lại
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={24}>
          <Card size="small" title="Thông tin thanh toán">
            {orderDetail.data.method === "cod" && (
              <p>Thanh toán khi nhận hàng(COD)</p>
            )}
            {orderDetail.data.method === "visa" && (
              <>
                <p>Thanh toán bằng thẻ visa</p>
                <p>Số thẻ: {orderDetail.data.cardNumber}</p>
                <p>Tên in trên thẻ: {orderDetail.data.cardName}</p>
                <p>Ngày hết hạn: {orderDetail.data.endDate}</p>
                <p>Mã bảo mật: {orderDetail.data.code}</p>
              </>
            )}
            {orderDetail.data.method === "atm" && (
              <>
                <p>Thanh toán bằng thẻ ATM</p>
                <p>Ngân hàng: {orderDetail.data.bank}</p>
              </>
            )}
          </Card>
        </Col>
        <Col span={24}>
          <Card size="small" title="Thông tin đơn hàng">
            <h4>
              Ngày tạo đơn:{" "}
              {moment(orderDetail.data.createdAt).format("DD/MM/YYYY")}
            </h4>
            <p>Mã đơn: {orderDetail.data.orderCode}</p>

            <Table
              columns={tableColumn}
              dataSource={tableData}
              pagination={false}
              footer={() => {
                return (
                  <>
                    {orderDetail.data.coupon && (
                      <h4>Có mã giảm giá {orderDetail.data?.couponValue}%</h4>
                    )}
                    <h4>
                      Khách phải thanh toán:{" "}
                      {orderDetail.data.totalPrice?.toLocaleString()}
                      <sup>đ</sup>
                    </h4>
                  </>
                );
              }}
            />
          </Card>
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default AdminOrderDetailPage;
