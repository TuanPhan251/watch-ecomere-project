import { Button, Card, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { loginAction } from "../../redux/actions";
import { ROUTES } from "../../constants/routes";
import * as S from "./styles";

const LoginPage = () => {
  const [loginForm] = Form.useForm();
  const dispatch = useDispatch();
  const { loginData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginData.error) {
      loginForm.setFields([
        {
          name: "email",
          errors: [loginData.error],
        },
        {
          name: "password",
          errors: [" "],
        },
      ]);
    }
  }, [loginData.error]);
  const handleLogin = (values) => {
    dispatch(
      loginAction({
        data: {
          email: values.email,
          password: values.password,
        },
        callback: {
          goToDashBoard: () => navigate(ROUTES.ADMIN.DASH_BOARD),
          goToHomePage: () => navigate(ROUTES.USER.HOME),
        },
      })
    );
  };
  return (
    <S.LoginWrapper>
      <div className="login-container">
        <div className="login-text">
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
            form={loginForm}
            name="login"
            className="login-form"
            size="large"
            initialValues={{ remember: true }}
            onFinish={(values) => handleLogin(values)}
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
            <Form.Item style={{ height: 30 }}>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox style={{ fontSize: 17 }}>Nhớ tài khoản</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item style={{ fontSize: 17 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng Nhập
              </Button>
              Hoặc <Link to={ROUTES.REGISTER}> Đăng ký ngay!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </S.LoginWrapper>
  );
};

export default LoginPage;
