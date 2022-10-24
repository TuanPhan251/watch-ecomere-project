import styled from "styled-components";

export const ProductDetailContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 12px;
  margin: calc(var(--header-height) + 60px) auto 0;
  background-color: #fff;
  border-radius: 2px;
`;

export const ProductImageWrapper = styled.div`
  width: 300px;
  margin: auto;

  & img {
    width: 100%;
  }
`;

export const ProductInfoWrapper = styled.div`
  border: var(--boder-basic);
  padding: 12px;
  border-radius: 4px;
`;

export const ProductSummary = styled.div`
  color: var(--dark-text-color);
  border-bottom: var(--boder-basic);

  h2 {
    font-size: 24px;
    font-weight: 400;
  }

  .product_rating {
    .product_rating-quantity {
      margin-left: 12px;
      color: var(--text-disabled);
    }
  }

  .product_summary-brand {
    margin: 8px 0;
    font-size: 16px;
    color: var(--dark-text-color);

    span {
      font-size: 18px;
      font-weight: 500;
      color: var(--price-color);
    }
  }

  .product_summary-gender {
    margin: 8px 0;
    font-size: 16px;
    color: var(--dark-text-color);

    a {
      font-size: 18px;
      font-weight: 500;
      color: var(--price-color);

      :hover {
        color: #a8071a;
      }
    }
  }

  .product_summary-price {
    margin: 8px 0 24px;
    color: var(--dark-text-color);
    text-align: left;
    font-size: 24px;
    font-weight: 500;

    .product_summary-price-original {
      margin-left: 12px;
      text-decoration: line-through;
      color: var(--text-disabled);
      font-size: 24px;
    }

    .product_summary-price-final {
      margin-left: 4px;
      color: var(--price-color);
      font-size: 32px;
    }
  }
`;

export const PolicyWrapper = styled.div`
  padding: 24px 0;
  border-bottom: var(--boder-basic);

  .product_policy-list {
    width: 100%;
    list-style: none;
    padding: 12px;
    background-color: #f5f5f5;
    border-radius: 4px;

    .product_policy-item {
      margin: 8px 0;

      & i {
        min-width: 30px;
        font-size: 20px;
      }

      & span {
        color: var(--dark-text-color);
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  .product_actions {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 4px;
  }
`;

export const ProductActions = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 24px;
  border-radius: 4px;

  button {
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: var(--button-color);
    color: #fff;
    font-size: 20px;
    transition: all 0.3s ease;
    cursor: pointer;

    :hover {
      background-color: #262626;
    }
  }

  .product_action-addcart {
    display: flex;
    margin-top: 12px;

    .product_action-addcart-quantity {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: 16px;
        margin-right: 8px;
      }

      button {
        width: 30px;
        background-color: #fff;
        color: var(--dark-text-color);
        border: var(--boder-basic);

        :hover {
          background-color: #262626;
          color: #fff;
        }
      }

      input {
        outline: none;
        display: block;
        margin: 0 4px;
        width: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        border: var(--boder-basic);
        border-radius: 2px;
      }
    }

    .product_action-addcart-btn {
      flex: 1;
      margin-left: 24px;
    }
  }
`;

//product spec section

export const ProductSpecContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  background-color: #fff;
`;

export const ProductSpecHeading = styled.h3`
  width: 100%;
  margin-bottom: 32px;
  text-align: center;
  color: var(--dark-text-color);
  font-size: 26px;
  text-transform: uppercase;
`;

export const ProductSpecCol = styled.ul`
  list-style: none;
  margin: -4px 0;

  & li:nth-child(2n + 1) {
    background-color: #f5f5f5;
  }
`;

export const ProductSpecItem = styled.li`
  display: flex;
  justify-content: space-around;
  padding: 4px 8px;
  margin: 4px 0;
  font-size: 16px;
  color: var(--dark-text-color);
  font-weight: 400;

  & span:first-child {
    width: 30%;
    font-weight: 500;
  }

  & span:last-child {
    width: 50%;
    text-align: right;
  }
`;
