import { useEffect, useMemo, useState } from "react";
import { generatePath, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Input, Row, Select, Spin } from "antd";
import moment from "moment";

import { getBlogListAction } from "../../../redux/actions";

import BreadCrumb from "../../../components/BreadCrumb";
import { ROUTES } from "../../../constants/routes";

import * as S from "./styles";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { blogList } = useSelector((state) => state.blog);

  const initialFilterParams = { keyword: "", sort: "" };
  const [filterParams, setFilterParams] = useState({ ...initialFilterParams });

  useEffect(() => {
    document.title = "Bài viết";

    dispatch(
      getBlogListAction({
        params: {
          page: 1,
          limit: 6,
        },
      })
    );
  }, []);

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
          limit: 6,
        },
      })
    );
  };

  const handleShowMore = () => {
    dispatch(
      getBlogListAction({
        params: {
          ...filterParams,
          page: blogList.meta.page + 1,
          limit: 6,
        },
        more: true,
      })
    );
  };

  const renderBlog = useMemo(() => {
    return blogList.data.map((item) => {
      return (
        <Col xxl={8} lg={8} md={12} xs={12} key={item.id}>
          <Link
            to={generatePath(ROUTES.USER.BLOG_DETAIL, {
              id: `${item.slug}.${item.id}`,
            })}
          >
            <S.BlogItem>
              <div className="blog__thumb">
                <img src={item.thumb} alt="" />
              </div>

              <div className="blog__content">
                <p className="blog__content-createdAt">
                  {moment(item.createdAt).fromNow()} | {item.author}
                </p>

                <h3 className="blog__content-title">{item.title}</h3>

                <p className="blog__content-desc">{item.desc}</p>
              </div>
            </S.BlogItem>
          </Link>
        </Col>
      );
    });
  }, [blogList.data]);

  return (
    <S.Wrapper>
      <S.TopWrapper></S.TopWrapper>

      <S.BreadcrumbWrapper>
        <BreadCrumb
          breadCrumbItems={[
            {
              title: "Trang chủ",
              path: ROUTES.USER.HOME,
            },
            {
              title: "Bài viết",
              path: "",
            },
          ]}
        />
      </S.BreadcrumbWrapper>

      <S.ContentWrapper>
        <Row gutter={16} style={{ marginBottom: "12px" }}>
          <Col
            xxl={20}
            md={20}
            sm={16}
            xs={24}
            style={{ marginBottom: "12px" }}
          >
            <Input
              placeholder="Nhập để tìm bài viết"
              onChange={(e) => handleFilter(e.target.value, "keyword")}
              allowClear
            />
          </Col>
          <Col xxl={4} md={4} sm={8} xs={24}>
            <Select
              placeholder="Sắp xếp theo"
              style={{ width: "100%" }}
              allowClear
              onChange={(value) => handleFilter(value, "sort")}
            >
              <Select.Option value="desc.createdAt">Mới nhất</Select.Option>
              <Select.Option value="asc.createdAt">Cũ nhất</Select.Option>
            </Select>
          </Col>
        </Row>

        <Spin spinning={blogList.loading}>
          <Row gutter={[16, 16]}>{renderBlog}</Row>
        </Spin>

        <div className="blog__content-action">
          {blogList.data.length !== blogList.meta.total && (
            <Button
              type="primary"
              loading={blogList.loading}
              onClick={() => handleShowMore()}
            >
              Xem thêm
            </Button>
          )}
        </div>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default BlogPage;
