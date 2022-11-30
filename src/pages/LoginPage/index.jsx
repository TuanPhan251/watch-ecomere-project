import { Button, Carousel, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { loginAction } from "../../redux/actions";
import { ROUTES } from "../../constants/routes";
import * as S from "./styles";
import img1 from "../../../src/assets/banner/carousel 1.jpg";
import img2 from "../../../src/assets/banner/carousel 2.jpg";
import img3 from "../../../src/assets/banner/men-1.webp";
import img4 from "../../../src/assets/banner/women-1.webp";

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
        <div className="login-left">
          <Carousel autoplay>
            <div>
              <img
                alt="watch"
                src={img1}
                style={{ width: "100%", height: "700px" }}
              />
            </div>
            <div>
              <img
                alt="watch"
                src={img2}
                style={{ width: "100%", height: "700px" }}
              />
            </div>
            <div>
              <img
                alt="watch"
                src={img3}
                style={{ width: "100%", height: "700px" }}
              />
            </div>
            <div>
              <img
                alt="watch"
                src={img4}
                style={{ width: "100%", height: "700px" }}
              />
            </div>
          </Carousel>
        </div>
        <div className="login-right">
          <div className="title-login">
            <S.TextLabel>Tuan & Phuong</S.TextLabel>
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
                prefix={<UserOutlined className="site-form-item-icon" />}
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
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item style={{ height: 30 }}>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox style={{ fontSize: 17 }}>Nhớ tài khoản</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ padding: 5, fontSize: 17 }}
              >
                Đăng Nhập
              </Button>
              <button
                onClick={() => navigate(ROUTES.REGISTER)}
                className="navi-register-button"
              >
                Tạo tài khoản
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </S.LoginWrapper>
  );
};

export default LoginPage;
