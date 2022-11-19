import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
`;

export const TopWrapper = styled.div`
  margin-bottom: 24px;
  h2 {
  }
`;

export const OrderStatus = styled.div`
  i {
    font-size: 16px;
    margin-right: 4px;
  }

  .ant-tag {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
