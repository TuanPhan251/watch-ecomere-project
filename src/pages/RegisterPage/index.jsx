import { Button, Card, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { registerAction } from "../../redux/actions";
import * as S from "./styles";
import { ROUTES } from "../../constants/routes";

const RegisterPage = () => {
  const [registerForm] = Form.useForm();
  const dispatch = useDispatch();
  const { registerData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (registerData.error) {
      registerForm.setFields([
        {
          name: "email",
          errors: [registerData.error],
        },
      ]);
    }
  }, [registerData.error]);
  const handleRegister = (values) => {
    dispatch(
      registerAction({
        data: {
          email: values.email,
          password: values.password,
          userName: values.userName,
          role: "user",
        },
        callback: {
          goToLogIn: () => navigate(ROUTES.LOGIN),
        },
      })
    );
  };
  return (
    <S.RegisterWrapper>
      <div className="register-container">
        <div className="register-text">
          <Card
            title="WELCOME TO MY SHOP"
            bordered={false}
            style={{
              width: 500,
              fontSize: 17,
            }}
          >
            <p>Creating an account would make it easy to:</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div>
          <Form
            form={registerForm}
            name="registerForm"
            className="register-form"
            size="large"
            onFinish={(values) => handleRegister(values)}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Nhập địa chỉ Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Nhập mật khẩu!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Xác nhận mật khẩu!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("Mật khẩu không trùng khớp")
                    );
                  },
                }),
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder=" Confirm Password"
              />
            </Form.Item>

            <Form.Item
              name="userName"
              rules={[
                {
                  required: true,
                  message: "Nhập tên người dùng!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="name"
                placeholder="UserName"
              />
            </Form.Item>

            <Form.Item style={{ fontSize: 17 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="register-form-button"
              >
                Đăng Ký
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </S.RegisterWrapper>
  );
};

export default RegisterPage;
