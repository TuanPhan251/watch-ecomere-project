import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - var(--header-height));
  background-color: var(--bgr-color);
`;

export const TopSpacer = styled.div`
  width: 100%;
  padding-top: var(--header-height);
  margin-bottom: 12px;
`;

export const BreadcrumbWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-bottom: 12px;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 500px;
  margin: auto;
  padding: 12px;
  background-color: #fff;

  .page__heading {
    margin: 12px 0;

    h3 {
      font-size: 20px;
      text-align: center;
    }
  }

  .search__form {
  }
`;
