import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bgr-color);
  padding-bottom: 12px;
`;

export const TopSpacer = styled.div`
  width: 100%;
  height: var(--header-height);
`;

export const BreadCrumbWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 12px auto;
`;

export const UserPageContent = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  margin: 12px auto;
`;

export const UserInfo = styled.div`
  min-height: 500px;
  padding: 12px;
  background-color: #fff;

  @media (max-width: 992px) {
    margin-top: 12px;
  }
`;
