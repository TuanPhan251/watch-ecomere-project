import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import slug from "slug";

import { Button, Form, Input, Spin, Space } from "antd";

import { ROUTES } from "../../../../constants/routes";
import {
  updateBlogAction,
  getBlogDetailAction,
} from "../../../../redux/actions";

import * as S from "./styles";

const UpdateBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createBlog, blogDetail } = useSelector((state) => state.blog);

  const [updateForm] = Form.useForm();
  const initialFormValues = {
    ...blogDetail.data,
  };

  useEffect(() => {
    dispatch(getBlogDetailAction({ id }));

    document.title = "Chỉnh sửa bài viết";
  }, [id]);

  useEffect(() => {
    if (blogDetail.data.id) {
      updateForm.resetFields();
    }
  }, [blogDetail.data]);

  const handleUpdateForm = (data) => {
    console.log(data);

    dispatch(
      updateBlogAction({
        id,
        data: { ...data, slug: slug(data.title) },
        callback: {
          goToList: () => {
            navigate(ROUTES.ADMIN.BLOG_LIST_PAGE);
          },
        },
      })
    );
  };

  if (blogDetail.loading)
    return (
      <S.Wrapper>
        <Spin spinning={true}>
          <div
            style={{
              minHeight: "100vh",
            }}
          ></div>
        </Spin>
      </S.Wrapper>
    );

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Cập nhật bài viêt</h3>

        <Space>
          <Button
            type="primary"
            htmlType="submit"
            loading={createBlog.loading}
            onClick={() => updateForm.submit()}
          >
            Cập nhật bài viêt
          </Button>

          <Button onClick={() => navigate(ROUTES.ADMIN.BLOG_LIST_PAGE)}>
            Hủy
          </Button>
        </Space>
      </S.TopWrapper>

      <Form
        form={updateForm}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        style={{ padding: "12px 0" }}
        autoComplete="off"
        initialValues={initialFormValues}
        onFinish={(values) => {
          handleUpdateForm(values);
        }}
      >
        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[{ required: true, message: "Hãy nhập tiêu đề bài viết" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tác giả"
          name="author"
          rules={[{ required: true, message: "Hãy nhập tác giả bài viết" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ảnh"
          name="thumb"
          rules={[{ required: true, message: "Hãy nhập ảnh bài viết" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="desc"
          rules={[{ required: true, message: "Hãy nhập mô tả bài viết" }]}
        >
          <Input.TextArea
            autoSize={{
              minRows: 2,
              maxRows: 6,
            }}
          />
        </Form.Item>

        <Form.Item
          label="Nội dung bài viết"
          name="content"
          rules={[{ required: true, message: "Hãy nhập nội dung bài viết" }]}
        >
          <ReactQuill
            theme="snow"
            onChange={(value) => updateForm.setFieldsValue({ content: value })}
          />
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
};

export default UpdateBlogPage;
