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

  .user_info-title {
    font-size: 20px;
    text-align: center;
  }
  .user_info-summary {
    width: 90%;
    margin: 0 auto;
    padding: 12px;
    border: var(--boder-basic);
    border-radius: 4px;

    p {
      font-size: 16px;
      color: var(--dark-text-color);

      span {
        font-weight: 500;
      }
    }
  }
`;
