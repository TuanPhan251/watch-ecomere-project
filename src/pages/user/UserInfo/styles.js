import styled from "styled-components";

export const Wrapper = styled.div`
  .user_info-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 24px;
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

  .user_info-action {
    margin-top: 24px;
  }
`;
