import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Col, Form, Button, message, notification } from "antd";

import { updateUserPasswordAction } from "../../../../redux/actions";

import Layout from "../Layout";

import * as S from "./styles";

const UserInfoPasswordPage = () => {
  const [passwordForm] = Form.useForm();

  const dispatch = useDispatch();
  const { userInfo, updatePasswordData } = useSelector((state) => state.user);

  useEffect(() => {
    document.title = "Đổi mật khẩu";

    return () => {
      passwordForm.resetFields();
    };
  }, []);

  useEffect(() => {
    if (updatePasswordData.error) {
      passwordForm.setFields([
        {
          name: "password",
          errors: [updatePasswordData.error],
        },
      ]);
    }
  }, [updatePasswordData.error]);

  const handleChangePassword = (values) => {
    const { password, newPassword } = values;

    dispatch(
      updateUserPasswordAction({
        data: {
          email: userInfo.data.email,
          password,
        },
        newPassword,
        callback: {
          resetFields: () => {
            passwordForm.resetFields();
          },
          showMessage: () => {
            notification.success({
              message: "Thành công",
              description: "Mật khẩu của bạn đã được thay đổi",
            });
          },
        },
      })
    );
  };

  return (
    <Layout>
      <Col span={18}>
        <S.Wrapper>
          <h3 className="user_info-title">Đổi mật khẩu</h3>

          <Form
            form={passwordForm}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            onFinish={(values) => handleChangePassword(values)}
          >
            <Form.Item
              label="Mật khẩu cũ"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập mật khẩu cũ của bạn",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="newPassword"
              label="Mật khẩu mới"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập mật khẩu mới của bạn",
                },
                {
                  min: 6,
                  message: "Mật khẩu phải có ít nhất 6 kí tự",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Nhập lại mật khẩu mới"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Hãy xác nhận mật khẩu mới của bạn",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu vừa nhập không trùng khớp!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                loading={updatePasswordData.loading}
                type="primary"
                htmlType="submit"
              >
                Xác nhận
              </Button>
            </Form.Item>
          </Form>
        </S.Wrapper>
      </Col>
    </Layout>
  );
};

export default UserInfoPasswordPage;
