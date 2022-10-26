import styled from "styled-components";

export const PolicyWrapper = styled.div`
  .product_policy-list {
    width: 100%;
    list-style: none;
    padding: 12px;
    border-radius: 4px;
    border: var(--boder-basic);

    .product_policy-item {
      margin: 8px 0;

      & i {
        color: var(--price-color);
        min-width: 30px;
        font-size: 20px;
      }

      & span {
        color: var(--dark-text-color);
        font-size: 16px;
      }
    }
  }

  .customer_support-list {
    width: 100%;
    list-style: circle;
    margin-top: 12px;
    padding: 12px;
    border-radius: 4px;
    border: var(--boder-basic);

    .customer_support-item {
      margin-left: 16px;
      font-size: 16px;

      a {
        color: var(--dark-text-color);
      }
      :hover {
        a {
          color: var(--price-color);
          font-weight: 500;
        }
      }
    }
  }

  .customer_support-number {
    width: 100%;
    list-style: circle;
    margin-top: 12px;
    padding: 12px;
    border-radius: 4px;
    border: var(--boder-basic);

    .customer_support-item {
      margin-left: 16px;
      font-size: 16px;

      a {
        color: var(--dark-text-color);
      }
      :hover {
        a {
          font-weight: 500;
          color: var(--price-color);
        }
      }
    }
  }
`;
