import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, generatePath } from "react-router-dom";
import moment from "moment";

import { getBlogListAction, deleteBlogAction } from "../../../redux/actions";

import { Table, Col, Row, Space, Button, Input, Pagination } from "antd";

import * as S from "./styles";
import { ROUTES } from "../../../constants/routes";

const AdminBlogsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogList, deleteBlog } = useSelector((state) => state.blog);

  const initialFilterParams = { keyword: "", sort: "" };
  const [filterParams, setFilterParams] = useState({ ...initialFilterParams });

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    dispatch(
      getBlogListAction({
        params: {
          page: 1,
          limit: 10,
        },
      })
    );

    document.title = "Danh sách bài viết";
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

  const handleDeleteBlog = (id) => {
    dispatch(
      deleteBlogAction({
        id: id,
        callback: {
          hideModal: () => {
            setShowModal(false);
          },
          getBlogList: () => {
            dispatch(
              getBlogListAction({
                params: {
                  page: 1,
                  limit: 10,
                },
              })
            );
          },
        },
      })
    );
  };

  const handleFilter = (value, type) => {
    setFilterParams({
      ...filterParams,
      [type]: value,
    });
    dispatch(
      getBlogListAction({
        params: {
          ...filterParams,
          [type]: value,
          page: 1,
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
      render: (_, record) => {
        return <p>{moment(record.createdAt).format("DD/MM/YYYY")}</p>;
      },
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
      render: (_, record) => (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              type="danger"
              onClick={() => {
                setDeleteId(record.id);
                setShowModal(true);
              }}
              style={{ marginBottom: 8 }}
            >
              <i className="fa-solid fa-trash"></i>
              <span style={{ marginLeft: 4 }}>Xóa</span>
            </Button>

            <Button
              onClick={() =>
                navigate(
                  generatePath(ROUTES.ADMIN.UPDATE_BLOG_PAGE, {
                    id: record.id,
                  })
                )
              }
            >
              <i className="fa-solid fa-pen-to-square"></i>
              <span style={{ marginLeft: 4 }}>Sửa</span>
            </Button>
          </div>
          <S.ConfirmModal
            title="Xóa sản phẩm"
            open={showModal}
            centered
            destroyOnClose={true}
            maskStyle={{ backgroundColor: "rgba(0,0,0, 0.1)" }}
            style={{ boxShadow: "none" }}
            onOk={() => handleDeleteBlog(deleteId)}
            onCancel={() => setShowModal(false)}
            okText="Xác nhận"
            cancelText="Hủy"
            confirmLoading={deleteBlog.loading}
          >
            <p>Không thể hoàn tác sau khi xác nhận, đồng ý xóa ?</p>
          </S.ConfirmModal>
        </>
      ),
      width: 100,
    },
  ];

  const tableData = blogList.data.map((item) => ({
    ...item,
    key: item.id,
  }));

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h2>Danh sách bài viết</h2>
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
              <Input
                placeholder="Nhập để tìm kiếm"
                onChange={(e) => handleFilter(e.target.value, "keyword")}
                allowClear
              />
            </Col>
          </Space>
        </Col>

        <Col span={20}>
          <Table
            loading={blogList.loading}
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
