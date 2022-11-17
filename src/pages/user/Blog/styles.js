import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - var(--header-height));
  background-color: var(--bgr-color);
  padding-bottom: 24px;
`;

export const TopWrapper = styled.div`
  width: 100%;
  padding-top: var(--header-height);
`;

export const BreadcrumbWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 12px auto;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 12px;
  background-color: #fff;

  .blog__content-action {
    margin-top: 24px;
    display: flex;
    justify-content: center;
  }
`;

export const BlogItem = styled.article`
  color: var(--dark-text-color);
  transition: all 0.3s ease;

  .blog__thumb {
    position: relative;
    width: 100%;
    padding-top: 80%;

    img {
      position: absolute;
      inset: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .blog__content {
    margin-top: 12px;
    padding: 12px;

    .blog__content-createdAt {
      font-size: 16px;
      margin-bottom: 12px;
      text-align: center;
      text-transform: uppercase;
      color: #999;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
    .blog__content-title {
      margin-bottom: 12px;
      text-align: center;
      font-size: 18px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .blog__content-desc {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }

  :hover {
    box-shadow: 0 0 4px #ddd;
  }
`;
