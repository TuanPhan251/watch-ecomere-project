import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row, Table, notification, Tag } from "antd";
import moment from "moment/moment";

import {
  getOrderListAction,
  updateOrderStatusAction,
} from "../../../../redux/actions";
import Layout from "../Layout";

import * as S from "./styles";

const UserInfoOrderPage = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { orderList } = useSelector((state) => state.order);

  useEffect(() => {
    document.title = "Lịch sử mua hàng";
  }, []);

  useEffect(() => {
    dispatch(getOrderListAction({ userId: userInfo.data.id }));
  }, [userInfo.data]);

  const handleCancelOrder = (status, id) => {
    if (status === "userCancel" || status === "cancel") {
      notification.warn({
        message: "Không thể thực hiện",
        description: "Đơn hàng này đã được hủy trước đó",
      });
    } else if (status === "delivering" || status === "done") {
      notification.error({
        message: "Thất bại",
        description: "Đơn hàng này không thể hủy được nữa",
      });
    } else {
      const selectedOrder = orderList.data.find((item) => item.id === id);
      const { orderProducts, ...originalOrderData } = selectedOrder;
      dispatch(
        updateOrderStatusAction({
          id: id,
          data: {
            ...originalOrderData,
            status: "userCancel",
          },
          callback: {
            getOrderList: () => {
              dispatch(getOrderListAction({ userId: userInfo.data.id }));
            },
          },
        })
      );
      notification.success({
        message: "Thành công",
        description: "Đơn hàng này đã bị hủy",
      });
    }
  };

  const tableColumn = [
    {
      title: "Ngày đặt",
      dataIndex: "orderDate",
      align: "center",
      key: "orderDate",
      render: (_, record) => {
        return <span>{moment(record.createdAt).format("DD/MM/YYYY")}</span>;
      },
      width: 100,
    },
    {
      title: "Mã đơn hàng",
      dataIndex: "orderCode",
      align: "center",
      key: "orderCode",
    },
    {
      title: "Thành tiền",
      dataIndex: "totalPrice",
      align: "center",
      key: "totalPrice",
      render: (_, record) => {
        return (
          <span>
            {record.totalPrice?.toLocaleString()} <sup>đ</sup>
          </span>
        );
      },
      width: 100,
      responsive: ["md"],
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (_, record) => {
        switch (record.status) {
          case "delivering": {
            return (
              <S.OrderStatus>
                <Tag color="blue">
                  <i className="fa-solid fa-truck-fast"></i>Đang giao
                </Tag>
              </S.OrderStatus>
            );
          }
          case "cancel": {
            return (
              <S.OrderStatus>
                <Tag color="red">
                  <i className="fa-solid fa-circle-xmark"></i>Admin hủy
                </Tag>
              </S.OrderStatus>
            );
          }
          case "userCancel": {
            return (
              <S.OrderStatus>
                <Tag color="red">
                  <i className="fa-solid fa-circle-xmark"></i>Đã hủy
                </Tag>
              </S.OrderStatus>
            );
          }
          case "done": {
            return (
              <S.OrderStatus>
                <Tag color="green">
                  <i className="fa-solid fa-circle-check"></i>Hoàn thành
                </Tag>
              </S.OrderStatus>
            );
          }
          default: {
            return (
              <S.OrderStatus>
                <Tag>
                  <i className="fa-solid fa-clock-rotate-left"></i>Chờ xử lý
                </Tag>
              </S.OrderStatus>
            );
          }
        }
      },
      width: 100,
    },
    {
      title: "Tùy chọn",
      dataIndex: "actions",
      align: "center",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            {record.status === "pending" && (
              <Button
                type="danger"
                size="small"
                onClick={() => handleCancelOrder(record.status, record.id)}
              >
                Hủy đơn
              </Button>
            )}
          </>
        );
      },
      width: 80,
    },
  ];

  const tableData = orderList.data?.map((item) => ({ ...item, key: item.id }));

  return (
    <Layout>
      <S.Wrapper>
        <h3 className="user_info-title">Lịch sử mua hàng</h3>

        <Table
          size="small"
          loading={orderList.loading}
          columns={tableColumn}
          dataSource={tableData}
          pagination={false}
          style={{ marginBottom: "auto" }}
          expandable={{
            expandedRowRender: (record) => (
              <S.ExpandTableRow>
                <Row gutter={[8, 8]}>
                  <Col span={24}>
                    <h4>
                      Địa chỉ:{" "}
                      {`${record.address}, ${record.wardName}, ${record.districtName}, ${record.cityName}`}
                    </h4>
                  </Col>
                  <Col span={24}>
                    <h4>
                      Thành tiền: {record.totalPrice?.toLocaleString()}
                      <sup>đ</sup>
                    </h4>
                  </Col>
                  {record.orderProducts.map((item) => {
                    return (
                      <S.OrderItem key={item.id}>
                        <Col span={2}>
                          <img width="100%" src={item.image} alt="" />
                        </Col>

                        <Col span={12} className="order__item-name">
                          <h4>{item.productName}</h4>
                        </Col>
                        <Col span={6} className="order__item-price">
                          <span>Đơn giá: </span>
                          <span>
                            {item.price?.toLocaleString()}
                            <sup>đ</sup>
                          </span>
                        </Col>
                        <Col span={4} className="order__item-quantity">
                          <span>Số lượng: </span>
                          <span>{item.quantity}</span>
                        </Col>
                      </S.OrderItem>
                    );
                  })}
                </Row>
              </S.ExpandTableRow>
            ),
          }}
        />
      </S.Wrapper>
    </Layout>
  );
};

export default UserInfoOrderPage;
