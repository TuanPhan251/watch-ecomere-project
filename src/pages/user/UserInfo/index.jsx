import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Col, Form, Input, Modal, message } from "antd";

import {
  updateUserInfoAction,
  getUserInfoAction,
} from "../../../redux/actions";

import Layout from "./Layout";

import * as S from "./styles";

const UserInfoPage = () => {
  const dispatch = useDispatch();
  const { userInfo, updateInfoData } = useSelector((state) => state.user);
  const [userForm] = Form.useForm();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = "Thông tin tài khoản";
  }, []);

  const handleChangeUserInfo = (values) => {
    dispatch(
      updateUserInfoAction({
        id: userInfo.data.id,
        values: values,
        callback: {
          openMessage: () => {
            message.success("Thay đổi thông tin thành công");
          },
          closeModal: () => {
            setShowModal(false);
          },
          getUserInfo: () => {
            dispatch(getUserInfoAction({ id: userInfo.data.id }));
          },
        },
      })
    );
  };

  return (
    <Layout>
      <S.Wrapper>
        <h3 className="user_info-title">Thông tin tài khoản</h3>

        <div className="user_info-summary">
          <p className="user_info-name">
            Tên người dùng: <span>{userInfo.data?.userName}</span>
          </p>

          <p className="user_info-email">
            Email: <span>{userInfo.data?.email}</span>
          </p>
        </div>

        <div className="user_info-action">
          <Col offset={10}>
            <Button type="primary" onClick={() => setShowModal(true)}>
              Sửa thông tin
            </Button>

            <Modal
              open={showModal}
              title="Thêm nhãn hàng mới"
              okText="Cập nhật"
              cancelText="Hủy"
              onCancel={() => setShowModal(false)}
              confirmLoading={updateInfoData.loading}
              onOk={() => {
                userForm
                  .validateFields()
                  .then((values) => {
                    handleChangeUserInfo(values);
                  })
                  .catch((info) => {
                    console.log("Validate Failed:", info);
                  });
              }}
            >
              <Form
                form={userForm}
                layout="vertical"
                initialValues={{
                  modifier: "public",
                  userName: userInfo.data.userName,
                }}
              >
                <Form.Item
                  name="userName"
                  label="Tên người dùng"
                  rules={[
                    {
                      required: true,
                      message: "Bạn phải nhập tên người dùng",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </Col>
        </div>
      </S.Wrapper>
    </Layout>
  );
};

export default UserInfoPage;
