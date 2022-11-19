import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import slug from "slug";

import { Button, Form, Input, Space } from "antd";

import { ROUTES } from "../../../../constants/routes";
import { createBlogAction } from "../../../../redux/actions";

import * as S from "./styles";

const CreateBlogPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createBlog } = useSelector((state) => state.blog);

  const [createForm] = Form.useForm();

  useEffect(() => {
    document.title = "Tạo bài viết";
  }, []);

  const handleCreateBlog = (data) => {
    console.log({ ...data, slug: slug(data.title) });

    dispatch(
      createBlogAction({
        data: {
          ...data,
          slug: slug(data.title),
        },
        callback: {
          goToList: () => {
            navigate(ROUTES.ADMIN.BLOG_LIST_PAGE);
          },
        },
      })
    );
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Tạo bài viết mới</h3>

        <Space>
          <Button
            type="primary"
            htmlType="submit"
            loading={createBlog.loading}
            onClick={() => createForm.submit()}
          >
            Tạo bài viết mới
          </Button>

          <Button onClick={() => navigate(ROUTES.ADMIN.BLOG_LIST_PAGE)}>
            Hủy
          </Button>
        </Space>
      </S.TopWrapper>

      <Form
        form={createForm}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        style={{ padding: "12px 0" }}
        autoComplete="off"
        onFinish={(values) => {
          handleCreateBlog(values);
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
            onChange={(value) => createForm.setFieldsValue({ content: value })}
          />
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
};

export default CreateBlogPage;
