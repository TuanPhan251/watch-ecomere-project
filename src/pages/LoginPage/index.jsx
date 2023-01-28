import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { loginAction } from "../../redux/actions";
import { ROUTES } from "../../constants/routes";
import * as S from "./styles";

const LoginPage = () => {
  const [loginForm] = Form.useForm();
  const { loginData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Gaida | Đăng nhập";
  }, []);

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
        {/* <div className="login-left">
        </div> */}
        <div className="login-right">
          <div className="title-login">
            <h3>Đăng nhập</h3>
          </div>
          <Form
            form={loginForm}
            layout="vertical"
            name="login"
            className="login-form"
            size="large"
            initialValues={{ remember: true }}
            onFinish={(values) => handleLogin(values)}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Nhập địa chỉ Email!",
                },
                {
                  type: "email",
                  message: "Email không đúng định dạng",
                },
              ]}
            >
              <Input
                prefix={<i className="fa-solid fa-circle-user"></i>}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[
                {
                  required: true,
                  message: "Nhập mật khẩu!",
                },
              ]}
            >
              <Input
                prefix={<i className="fa-solid fa-lock"></i>}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item style={{ height: 30 }}>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox style={{ fontSize: 17 }}>Nhớ tài khoản</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item style={{}}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ padding: 5, fontSize: 17 }}
                loading={loginData.loading}
              >
                Đăng Nhập
              </Button>

              <div style={{ textAlign: "center" }}>
                Chưa có tài khoản?{" "}
                <Link to={ROUTES.REGISTER}>Đăng ký ngay</Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </S.LoginWrapper>
  );
};

export default LoginPage;
