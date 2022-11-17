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

  .blog__detail-title {
    font-weight: 500;
    font-size: 16px;
  }

  .blog__detail-author {
    margin-top: 12px;

    .author__name {
      margin-right: 8px;
      font-weight: 500;
      color: var(--price-color);
    }

    .author__createdAt {
      color: #999;
    }
  }

  .blog__detail-content {
    margin-top: 24px;
    text-align: justify;
    font-size: 15px;

    img {
      margin: 12px 0;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    ul {
      padding: 20px;
    }
  }
`;
