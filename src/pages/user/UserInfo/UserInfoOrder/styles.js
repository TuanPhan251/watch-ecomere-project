import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  .user_info-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 24px;
  }
`;
export const OrderItemList = styled.div``;

export const OrderItem = styled.div`
  display: flex;

  .order__item-name,
  .order__item-price,
  .order__item-quantity {
    display: flex;
    align-items: center;
  }
`;

export const ExpandTableRow = styled.div`
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #fafafa;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #595959;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #fafafa;
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
