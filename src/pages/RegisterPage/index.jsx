import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
    document.title = "Gaida | Đăng ký";
  }, []);

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
        <div className="register-left"></div>
        <div className="register-right">
          <div className="title-register">
            <h3>Đăng ký</h3>
          </div>
          <Form
            form={registerForm}
            layout="vertical"
            name="registerForm"
            className="register-form"
            size="large"
            onFinish={(values) => handleRegister(values)}
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
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              label="Xác nhận mật khẩu"
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
                placeholder="Xác nhận mật khẩu"
              />
            </Form.Item>

            <Form.Item
              name="userName"
              label="Tên người dùng"
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
                placeholder="Tên người dùng"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="register-form-button"
                loading={registerData.loading}
              >
                Đăng Ký
              </Button>
              <div style={{ textAlign: "center" }}>
                <Link to={ROUTES.LOGIN}> Quay lại trang đăng nhập</Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </S.RegisterWrapper>
  );
};

export default RegisterPage;
