import styled from "styled-components";
import { Modal } from "antd";

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.loading ? "none" : "space-between")};
  padding: 12px;
  min-height: calc(100vh -60px);
  transition: all 0.3s ease;
`;

export const ProductListHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h2 {
    color: var(--dark-text-color);
  }
`;

export const ProductListTable = styled.div`
  height: 100%;
`;

export const ConfirmModal = styled(Modal)`
  .ant-modal-content {
    box-shadow: none;
  }
`;
