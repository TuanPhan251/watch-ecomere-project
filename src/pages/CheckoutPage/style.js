import styled from "styled-components";

export const CheckoutCartContainer = styled.div`
  width: 1200px;
  margin: calc(var(--header-height) + 24px) auto 0;
  padding: 12px;
  background-color: #fff;
`;

export const CheckoutHeading = styled.h2`
  color: var(--dark-text-color);
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
`;

export const CartItemsContainer = styled.div`
  display: flex;
`;

export const CartItemsWrapper = styled.div`
  width: 70%;
`;

export const CartItemsTHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & span {
    text-align: center;
    font-size: 16px;

    &:first-child {
      width: 50%;
    }

    &:nth-child(2) {
      width: 25%;
    }

    &:last-child {
      width: 25%;
    }
  }
`;

export const CartItemsActions = styled.div`
  width: 30%;
`;
