import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding-bottom: 24px;

  overflow: hidden;
`;

export const ProductDetailContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--header-height) + 24px) 24px 0;
  padding: 12px;
  background-color: #fff;
  border-radius: 2px;

  @media (max-width: 576px) {
    margin: var(--header-height) 0 0;
  }
`;

export const ProductImageWrapper = styled.div`
  border: var(--boder-basic);

  & img {
    width: 100%;
  }

  @media (max-width: 576px) {
    margin-bottom: 8px;
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
    font-weight: 500;
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

    @media (max-width: 576px) {
      .product_summary-price-original {
        font-size: 20px;
      }

      .product_summary-price-final {
        font-size: 28px;
      }
    }
  }
`;

export const PolicyWrapper = styled.div`
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
  padding-top: 12px;
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
      background-color: #030852;
    }
  }

  .product_action-addcart {
    display: flex;

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
          background-color: #030852;
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

    @media (max-width: 576px) {
      flex-wrap: wrap;
      .product_action-addcart-quantity {
        width: 100%;
      }

      .product_action-addcart-btn {
        margin: 8px 0;
      }
    }
  }
`;

//product spec section

export const BottomWrapper = styled.div`
  margin: 0 24px;
  background-color: #fff;
  border-top: var(--boder-basic);

  @media (max-width: 576px) {
    margin: 0;
  }
`;

export const ProductContent = styled.div`
  width: 100%;
  padding: 32px 16px;

  .product_content-heading {
    width: 100%;
    margin-bottom: 32px;
    text-align: center;
    color: var(--dark-text-color);
    font-size: 26px;
    text-transform: uppercase;
  }

  .product_content-main {
    p {
      font-size: 16px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;
