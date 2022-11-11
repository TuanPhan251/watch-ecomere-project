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
