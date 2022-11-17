import { Spin } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";

import BreadCrumb from "../../../../components/BreadCrumb";
import { ROUTES } from "../../../../constants/routes";
import { getBlogDetailAction } from "../../../../redux/actions";

import * as S from "./styles";

const BlogDetailPage = () => {
  const { id } = useParams();
  const blogId = parseInt(id.split(".")[1]);
  const dispatch = useDispatch();
  const { blogDetail } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogDetailAction({ id: blogId }));
  }, [id]);

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
              path: ROUTES.USER.BLOG,
            },
            {
              title: blogDetail.data.title,
              path: "",
            },
          ]}
        />
      </S.BreadcrumbWrapper>

      <S.ContentWrapper>
        <div className="blog__detail-title">
          <h2>{blogDetail.data.title}</h2>
        </div>
        <div className="blog__detail-author">
          <span className="author__name">{blogDetail.data.author}</span>
          <span className="author__createdAt">
            {moment(blogDetail.data.createdAt).format("DD MMMM YYYY, h:mm ")}
          </span>
        </div>

        <div
          className="blog__detail-content"
          dangerouslySetInnerHTML={{
            __html: blogDetail.data.content || "content here",
          }}
        ></div>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BlogDetailPage;
