import * as S from "../style";
import {
  Avatar,
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Table,
} from "antd";
import { STEP } from "./constants/step";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
  clearLocationAction,
  setCheckoutInfoAction,
} from "../../../../redux/actions";
import { useMemo } from "react";

const Info = ({ setStep }) => {
  const dispatch = useDispatch();
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );
  const { userInfo } = useSelector((state) => state.user);
  const { cartList, checkoutCoupon } = useSelector((state) => state.cart);
  const [infoForm] = Form.useForm();

  const initialFormValue = {
    nameInfo: userInfo.data.userName || "",
    emailInfo: userInfo.data.email || "",
    phoneNumber: undefined,
    cityCode: undefined,
    districtCode: undefined,
    wardCode: undefined,
    address: "",
  };

  const totalPrice = cartList.reduce((prev, item) => {
    return prev + item.totalPrice;
  }, 0);

  useEffect(() => {
    dispatch(getCityListAction());

    return () => {
      dispatch(clearLocationAction());
    };
  }, []);

  useEffect(() => {
    infoForm.resetFields();
  }, [userInfo.data]);

  const handleSubmitInfoForm = (values) => {
    const { cityCode, districtCode, wardCode, ...otherValues } = values;
    const cityData = cityList.data.find((item) => item.code === cityCode);
    const districtData = districtList.data.find(
      (item) => item.code === districtCode
    );
    const wardData = wardList.data.find((item) => item.code === wardCode);

    dispatch(
      setCheckoutInfoAction({
        ...otherValues,
        cityId: cityData.id,
        cityName: cityData.name,
        districtId: districtData.id,
        districtName: districtData.name,
        wardId: wardData.id,
        wardName: wardData.name,
      })
    );
    setStep(STEP.PAYMENT);
  };

  const renderCityOptions = useMemo(() => {
    return cityList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [cityList.data]);

  const renderDistrictOptions = useMemo(() => {
    return districtList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [districtList.data]);

  const renderWardListOptions = useMemo(() => {
    return wardList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [wardList.data]);

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
      align: "center",
      render: (category) => category.name,
      responsive: ["md"],
    },
    {
      title: "Số lượng",
      dataIndex: "totalAmount",
      key: "totalAmount",
      align: "center",
    },
    {
      title: "Đơn giá",
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
      responsive: ["md"],
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      align: "center",
      width: 120,
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
      <h2 className="cart_summary-heading">Thông tin giao hàng</h2>

      <S.CartInfoSummary>
        <Card size="small" title="Thông tin đơn hàng">
          <Table
            columns={tableColumn}
            dataSource={tableData}
            pagination={false}
            footer={() =>
              checkoutCoupon.discountPrice ? (
                <h4 style={{ textAlign: "right" }}>
                  Thành tiền: {checkoutCoupon.discountPrice?.toLocaleString()}
                  <sup>đ</sup> (Đã áp dụng mã giảm giá {checkoutCoupon.discount}
                  %)
                </h4>
              ) : (
                <h4 style={{ textAlign: "right" }}>
                  Thành tiền: {totalPrice?.toLocaleString()}
                  <sup>đ</sup>
                </h4>
              )
            }
          />
        </Card>
      </S.CartInfoSummary>

      <Card size="small" className="info-card" title="Thông tin người nhận">
        <Form
          name="infoForm"
          form={infoForm}
          initialValues={initialFormValue}
          layout="vertical"
          onFinish={(values) => handleSubmitInfoForm(values)}
        >
          <Row gutter={[16, 16]}>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
              <Form.Item
                label="Họ tên người nhận"
                name="nameInfo"
                rules={[
                  {
                    required: true,
                    message: "Thông tin này không được bỏ trống!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
              <Form.Item
                label="Email"
                name="emailInfo"
                rules={[
                  {
                    required: true,
                    message: "Thông tin này không được bỏ trống!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Thông tin này không được bỏ trống!",
                  },
                ]}
                label="Số điện thoại"
                name="phoneNumber"
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Thông tin này không được bỏ trống!",
                  },
                ]}
                label="Tỉnh/Thành phố"
                name="cityCode"
              >
                <Select
                  placeholder="Chọn Tỉnh/Thành phố"
                  onChange={(value) => {
                    dispatch(getDistrictListAction({ cityCode: value }));
                    infoForm.setFieldsValue({
                      districtCode: undefined,
                      wardCode: undefined,
                    });
                  }}
                >
                  {renderCityOptions}
                </Select>
              </Form.Item>
            </Col>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Thông tin này không được bỏ trống!",
                  },
                ]}
                label="Quận/Huyện"
                name="districtCode"
              >
                <Select
                  placeholder="Chọn Quận/Huyện"
                  onChange={(value) => {
                    dispatch(getWardListAction({ districtCode: value }));
                    infoForm.setFieldsValue({
                      wardCode: undefined,
                    });
                  }}
                >
                  {renderDistrictOptions}
                </Select>
              </Form.Item>
            </Col>
            <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Thông tin này không được bỏ trống!",
                  },
                ]}
                label="Phường/Xã"
                name="wardCode"
              >
                <Select placeholder="Chọn Phường/Xã">
                  {renderWardListOptions}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Thông tin này không được bỏ trống!",
                  },
                ]}
                label="Địa chỉ cụ thể"
                name="address"
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Row justify="space-around" style={{ marginTop: 24 }}>
        <Button
          size="large"
          type="primary"
          ghost
          onClick={() => setStep(STEP.CART)}
        >
          Quay lại
        </Button>
        <Button
          size="large"
          type="primary"
          // onClick={() => setStep(STEP.PAYMENT)}
          onClick={() => infoForm.submit()}
        >
          Tiếp tục
        </Button>
      </Row>
    </S.CheckoutCartContainer>
  );
};

export default Info;
