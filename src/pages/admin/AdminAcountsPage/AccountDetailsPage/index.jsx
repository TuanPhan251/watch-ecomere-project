import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { Input, Form, Button, Radio, Spin, Space } from "antd";

import {
  getUserDetailAction,
  updateUserInfoAction,
} from "../../../../redux/actions";

import * as S from "./styles";
import moment from "moment";
import { ROUTES } from "../../../../constants/routes";

const AccountDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetail, userInfo } = useSelector((state) => state.user);
  const { id } = useParams();
  const [userForm] = Form.useForm();
  const isCurrentAccount = userInfo.data.id === userDetail.data.id;

  useEffect(() => {
    dispatch(getUserDetailAction({ id }));
  }, [id]);

  useEffect(() => {
    if (userDetail.data.id) {
      userForm.resetFields();
    }
  }, [userDetail.data]);

  const handleUpdateUserInfo = (values) => {
    dispatch(
      updateUserInfoAction({
        id,
        values: {
          role: values.role,
        },
      })
    );
    navigate(ROUTES.ADMIN.ACCOUNT_LIST_PAGE);
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Thông tin tài khoản</h3>
      </S.TopWrapper>

      <Spin spinning={userDetail.loading}>
        <Form
          form={userForm}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            ...userDetail.data,
            createdAt: moment(userDetail.data.createdAt).format(
              "DD, MMMM, YYYY"
            ),
          }}
          onFinish={(values) => handleUpdateUserInfo(values)}
        >
          <Form.Item label="Tên người dùng" name="userName">
            <Input
              style={{ backgroundColor: "#fafafa", color: "#000" }}
              disabled={true}
            />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input
              style={{ backgroundColor: "#fafafa", color: "#000" }}
              disabled={true}
            />
          </Form.Item>

          <Form.Item label="Ngày tạo" name="createdAt">
            <Input
              style={{ backgroundColor: "#fafafa", color: "#000" }}
              disabled={true}
            />
          </Form.Item>

          <Form.Item label="Loại tài khoản" name="role">
            <Radio.Group disabled={isCurrentAccount}>
              <Radio value="user"> User </Radio>
              <Radio value="admin"> Admin </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                disabled={isCurrentAccount}
              >
                Thay đổi
              </Button>
              <Button
                type="primary"
                ghost
                onClick={() => navigate(ROUTES.ADMIN.ACCOUNT_LIST_PAGE)}
              >
                Quay lại
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Spin>
    </S.Wrapper>
  );
};

export default AccountDetailsPage;
