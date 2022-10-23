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

export const ProductSummary = styled.div`
  .product_summary-brand {
    margin: 8px 0;
    font-size: 16px;
    color: var(--dark-text-color);

    span {
      font-size: 18px;
      font-weight: 500;
      color: #ad2102;
    }
  }

  .product_summary-gender {
    margin: 8px 0;
    font-size: 16px;
    color: var(--dark-text-color);

    a {
      font-size: 18px;
      font-weight: 500;
      color: #ad2102;

      :hover {
        color: #a8071a;
      }
    }
  }

  .product_summary-price {
    margin: 8px 0 16px;
    color: var(--dark-text-color);
    text-align: left;
    font-size: 24px;
    font-weight: 500;

    span {
      color: #ad2102;
      font-size: 28px;
    }
  }
`;

export const PolicyActionWrapper = styled.div`
  display: flex;

  .product_policy-list {
    width: 70%;
    list-style: none;
    padding: 0 12px;
    margin: -8px 16px -8px 0;
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
