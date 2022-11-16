import styled from "styled-components";
import { Modal } from "antd";

export const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ConfirmModal = styled(Modal)`
  .ant-modal-content {
    box-shadow: none;
  }
`;
