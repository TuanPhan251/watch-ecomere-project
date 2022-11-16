import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { getBlogListAction, deleteBlogAction } from "../../../redux/actions";

import { Table, Col, Row, Space, Button, Input, Pagination } from "antd";

import * as S from "./styles";
import { ROUTES } from "../../../constants/routes";

const AdminBlogsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogList } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(
      getBlogListAction({
        params: {
          page: 1,
          limit: 10,
        },
      })
    );
  }, []);

  const handleChangePage = (page) => {
    dispatch(
      getBlogListAction({
        params: {
          page: page,
          limit: 10,
        },
      })
    );
  };

  const tableColumn = [
    {
      title: "Tiêu đề bài viết",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Tùy chọn",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Space>
          <Button>Chi tiết</Button>
          <Button type="danger">Tạm ẩn</Button>
        </Space>
      ),
      width: 300,
    },
  ];

  const tableData = blogList.data.map((item) => ({
    ...item,
    key: item.id,
  }));

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h2>Danh sách nhãn hàng</h2>
        <Button
          type="primary"
          onClick={() => navigate(ROUTES.ADMIN.CREATE_BLOG_PAGE)}
        >
          Tạo bài viết mới
        </Button>
      </S.TopWrapper>

      <Row
        gutter={4}
        style={{
          flex: 1,
        }}
      >
        <Col span={4}>
          <Space direction="vertical">
            <h3>
              <i className="fa-solid fa-filter"></i>Bộ lọc
            </h3>

            <Col span={24}>
              <Input placeholder="Nhập để tìm kiếm" />
            </Col>
          </Space>
        </Col>

        <Col span={20}>
          <Table
            columns={tableColumn}
            dataSource={tableData}
            pagination={false}
            style={{ marginBottom: "auto" }}
          />
        </Col>
      </Row>

      <Pagination
        style={{ margin: "20px auto 0" }}
        current={blogList.meta.page}
        pageSize={10}
        total={blogList.meta.total}
        onChange={(page) => handleChangePage(page)}
      />
    </S.Wrapper>
  );
};

export default AdminBlogsPage;
