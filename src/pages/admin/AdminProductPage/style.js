import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.loading ? "none" : "space-between")};
  padding: 24px;
  min-height: 100vh;
  transition: all 0.3s ease;
`;

export const ProductListHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h3 {
    font-size: 24px;
    color: var(--dark-text-color);
  }
`;

export const ProductListTable = styled.div`
  height: 100%;
`;
