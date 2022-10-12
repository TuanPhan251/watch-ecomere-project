import styled from "styled-components";

export const CheckoutCartContainer = styled.div`
  width: 90%;
  min-height: 800px;
  margin: calc(var(--header-height) + 24px) auto 0;
  padding: 24px 12px;
  background-color: #fff;

  .checkout-heading {
    color: var(--dark-text-color);
    font-size: 26px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 60px;
  }

  .cart-item-container {
    position: relative;
    display: flex;
  }

  .cart-item-wrapper {
    width: 70%;
    border-right: 1px dotted #ddd;
  }

  .cart-item-thead {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;

    & span {
      text-align: center;
      font-size: 20px;
      font-weight: 500;

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
  }

  .cart-actions {
    justify-self: center;
    position: sticky;
    top: var(--header-height);
    right: 0;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    .cart-total-price {
      font-size: 20px;
      color: var(--dark-text-color);

      span {
        font-size: 20px;
        color: #fa541c;
      }
    }
  }

  .cart-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      text-align: center;
    }
  }
`;

export const CartItem = styled.div`
  display: flex;
  margin: 8px 0;

  .item-img {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 20%;
      padding: 4px;
      border: 1px solid #eee;
      border-radius: 2px;
    }
  }

  .item-action {
    margin: 0 24px 0 12px;
    cursor: pointer;

    i {
      font-size: 18px;
    }

    :hover {
      opacity: 0.8;
    }
  }

  .item-quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;

    span {
      margin: 0 8px;
    }

    button {
      width: 20px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 2px;
      cursor: pointer;

      :hover {
        border: 2px solid #bbb;
      }
    }
  }

  .item-subtotal {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 16px;
    }
  }
`;
