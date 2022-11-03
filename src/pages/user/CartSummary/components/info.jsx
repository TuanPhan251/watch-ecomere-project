import * as S from "../style";
import { Button, Card, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { STEP } from "../components/constants/step";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
} from "../../../../redux/actions";
import { useMemo } from "react";

const Info = ({ setStep }) => {
  const dispatch = useDispatch();
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );
  const [infoForm] = Form.useForm();

  useEffect(() => {
    dispatch(getCityListAction());
  }, []);

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

  return (
    <S.CheckoutCartContainer>
      <h2 className="cart_summary-heading">Thông tin khách hàng</h2>
      {/* <S.InfoContainer> */}
      <Card size="small" className="info-card">
        <Form
          name="infoForm"
          form={infoForm}
          onFinish={(values) => console.log(values)}
        >
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                label="Họ tên người dùng"
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
            <Col span={8}>
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
            <Col span={8}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Thông tin này không được bỏ trống!",
                  },
                ]}
                label="Số điện thoại"
                name="phoneNumberCode"
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Thông tin này không được bỏ trống!",
                  },
                ]}
                label="Tỉnh/Thành"
                name="cityCode"
              >
                <Select
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
            <Col span={8}>
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
            <Col span={8}>
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
                <Select>{renderWardListOptions}</Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Thông tin này không được bỏ trống!",
                  },
                ]}
                label="Địa chỉ"
                name="address"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Row justify="space-between">
        <Button
          size="large"
          style={{ backgroundColor: "yellow", minWidth: 200 }}
          onClick={() => setStep(STEP.CART)}
        >
          Back
        </Button>
        <Button
          size="large"
          style={{ backgroundColor: "yellow", minWidth: 200 }}
          onClick={() => setStep(STEP.PAYMENT)}
          // onClick={() => infoForm.submit()}
        >
          Next
        </Button>
      </Row>
    </S.CheckoutCartContainer>
  );
};

export default Info;
