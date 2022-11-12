import { useDispatch, useSelector } from "react-redux";
import { generatePath, Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Radio,
  Row,
  Space,
  Table,
} from "antd";
import { v4 as uuidv4 } from "uuid";

import { ROUTES } from "../../../../constants/routes";
import { STEP } from "./constants/step";
import { BANKS } from "./constants/banks.constant";
import { orderProductAction } from "../../../../redux/actions/";
import * as S from "../style";

const Payment = ({ setStep }) => {
  const [paymentForm] = Form.useForm();
  const dispatch = useDispatch();
  const { orderProductData } = useSelector((state) => state.order);
  const { userInfo } = useSelector((state) => state.user);
  const { cartList, checkoutCoupon, checkoutInfo } = useSelector(
    (state) => state.cart
  );
  const totalPrice = cartList.reduce((prev, item) => {
    return prev + item.totalPrice;
  }, 0);

  const handleSubmitPaymentForm = (values) => {
    console.log(values);

    if (userInfo.data.id) {
      dispatch(
        orderProductAction({
          ...checkoutInfo,
          ...values,
          coupon: checkoutCoupon.name,
          couponValue: checkoutCoupon.discount,
          userId: userInfo.data.id,
          orderCode: uuidv4(),
          totalPrice: checkoutCoupon.discountPrice
            ? checkoutCoupon.discountPrice
            : totalPrice,
          status: "pending",
          products: cartList.map((item) => ({
            productId: item.id,
            productName: item.name,
            price: item.finalPrice,
            quantity: item.totalAmount,
            slug: item.slug,
            image: item.image,
          })),
          callback: {
            goToSuccess: () => {
              setStep(STEP.SUCCESS);
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
          <div className="product__name">
            <Space>
              <Avatar shape="square" size={64} src={record.image} />
              <h4 className="product__name-heading">{record.name}</h4>
            </Space>
          </div>
        );
      },
      width: 180,
      align: "center",
    },
    {
      title: "Số lượng",
      dataIndex: "totalAmount",
      key: "totalAmount",
      width: 40,
      align: "center",
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
      align: "center",
      width: 60,
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
      align: "center",
      width: 60,
      render: (_, record) => (
        <p>
          {record.totalPrice.toLocaleString()}
          <sup>đ</sup>
        </p>
      ),
    },
  ];

  const tableData = cartList.map((item) => ({ ...item, key: item.id }));

  return (
    <S.CheckoutCartContainer>
      <h2 className="cart_summary-heading">Thanh toán</h2>
      <Row gutter={8}>
        <Col xxl={12} lg={12} md={24} sm={24} xs={24}>
          <Form
            form={paymentForm}
            layout="vertical"
            name="paymentForm"
            onFinish={(values) => handleSubmitPaymentForm(values)}
          >
            <Card size="small">
              <Form.Item
                label="Chọn hình thức thanh toán"
                name="method"
                rules={[
                  {
                    required: true,
                    message: "Bạn phải chọn 1 hình thức thanh toán",
                  },
                ]}
              >
                <Radio.Group
                // style={{ display: "flex", flexDirection: "column", rowGap: 20 }}
                >
                  <Row>
                    <Col span={24}>
                      <Radio value="cod">Thanh toán khi nhận hàng(COD)</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value="visa">Thanh toán bằng thẻ VISA</Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value="atm">Thanh toán bằng thẻ ATM</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.method !== currentValues.method
                }
              >
                {({ getFieldValue }) =>
                  getFieldValue("method") === "visa" && (
                    <Card size="small">
                      <Form.Item
                        label="Số thẻ"
                        name="cardNumber"
                        rules={[
                          {
                            required: true,
                            message: "Bạn phải nhập mã thẻ",
                          },
                          {
                            pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
                            message: "Mã thẻ không đúng định dạng",
                          },
                        ]}
                      >
                        <InputNumber
                          style={{ width: "100%" }}
                          placeholder="VD: 4123 4567 8901 2345"
                        />
                      </Form.Item>
                      <Form.Item
                        label="Tên in trên thẻ"
                        name="cardName"
                        rules={[
                          {
                            required: true,
                            message: "Bạn phải nhập tên in trên thẻ",
                          },
                        ]}
                      >
                        <Input placeholder="VD: NGUYEN VAN A" />
                      </Form.Item>
                      <Form.Item
                        label="Ngày hết hạn"
                        name="date"
                        rules={[
                          {
                            required: true,
                            message: "Bạn phải nhập ngày hết hạn thẻ",
                          },
                          {
                            type: "date",
                            message: "Bạn phải nhập ngày hết hạn thẻ",
                          },
                        ]}
                      >
                        <DatePicker picker="month" placeholder="MM/YY" />
                      </Form.Item>
                      <Form.Item
                        label="Mã bảo mật"
                        name="code"
                        rules={[
                          {
                            required: true,
                            message: "Bạn phải nhập mã bảo mật thẻ",
                          },
                        ]}
                      >
                        <InputNumber placeholder="VD: 123" />
                      </Form.Item>
                    </Card>
                  )
                }
              </Form.Item>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.method !== currentValues.method
                }
              >
                {({ getFieldValue }) =>
                  getFieldValue("method") === "atm" && (
                    <Card size="small">
                      <Form.Item
                        name="bank"
                        rules={[
                          {
                            required: true,
                            message: "Bạn phải chọn 1 ngân hàng",
                          },
                        ]}
                      >
                        <Radio.Group size="large">
                          <Row gutter={[8, 8]}>
                            {BANKS.map((item) => {
                              return (
                                <Col span={8} key={item.name}>
                                  <Radio.Button value={item.name}>
                                    <img
                                      src={item.imageUrl}
                                      alt=""
                                      width="80"
                                      height="30"
                                      style={{
                                        objectFit: "cover",
                                      }}
                                    />
                                  </Radio.Button>
                                </Col>
                              );
                            })}
                          </Row>
                        </Radio.Group>
                      </Form.Item>
                    </Card>
                  )
                }
              </Form.Item>
            </Card>
          </Form>
        </Col>

        <Col xxl={12} lg={12} md={24} sm={24} xs={24}>
          <Card size="small" title="Thông tin đơn hàng">
            <S.TableCustom
              size="small"
              columns={tableColumn}
              dataSource={tableData}
              pagination={false}
            />
          </Card>

          <Card size="small" title="Thông tin người nhận">
            <p>Tên khách hàng: {checkoutInfo.nameInfo}</p>
            <p>Email: {checkoutInfo.emailInfo}</p>
            <p>Số điện thoại: {checkoutInfo.phoneNumber}</p>
            <p>
              Địa chỉ giao hàng: {checkoutInfo.address} -{" "}
              {checkoutInfo.wardName} - {checkoutInfo.districtName} -{" "}
              {checkoutInfo.cityName}
            </p>
            <p>
              Tổng tiền cần thanh toán:{" "}
              {checkoutCoupon.discountPrice
                ? checkoutCoupon.discountPrice?.toLocaleString()
                : totalPrice?.toLocaleString()}
              <sup>đ</sup>
            </p>
          </Card>
        </Col>
      </Row>

      <Row
        justify="space-around"
        style={{
          marginTop: 24,
        }}
      >
        <Button
          size="large"
          type="primary"
          ghost
          onClick={() => setStep(STEP.INFO)}
        >
          Quay lại
        </Button>

        <Button
          size="large"
          type="primary"
          onClick={() => paymentForm.submit()}
          loading={orderProductData.loading}
        >
          Xác nhận
        </Button>
      </Row>
    </S.CheckoutCartContainer>
  );
};

export default Payment;
